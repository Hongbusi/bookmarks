'use client'

import * as React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { createClient } from '@/lib/supabase/client'
import { calculateFileSamplingHash, ext } from '@/lib/file'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Icons } from '@/components/icons'
import type { Bookmark } from '@/types'

const formSchema = z.object({
  title: z.string().min(2).max(50),
  logo: z.string().url().optional(),
  url: z.string().url(),
  description: z.string().max(255),
})

interface CreateButtonProps {
  onRefresh: () => void
}

export interface CreateButtonRef {
  update: (bookmark: Bookmark) => void
}

// eslint-disable-next-line react/display-name
const CreateButton = React.forwardRef<CreateButtonRef, CreateButtonProps>(({ onRefresh }, ref) => {
  const supabase = createClient()

  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [isEdit, setIsEdit] = React.useState<boolean>(false)
  const [currentBookmark, setCurrentBookmark] = React.useState<Bookmark | null>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  const handleChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const hash = await calculateFileSamplingHash(file)
      const fileName = `https://oss.hongbusi.com/icons/${hash}.${ext(file.name)}`
      form.setValue('logo', fileName)
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (!open && isEdit) {
      setCurrentBookmark(null)
      form.reset()
      setIsEdit(false)
    }
    setIsOpen(open)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    const { data: { user } } = await supabase.auth.getUser()

    isEdit
      ? await supabase
        .from('bookmarks')
        .update(values)
        .eq('id', currentBookmark?.id)
        .select()
      : await supabase
        .from('bookmarks')
        .insert([{ ...values, user_id: user?.id }])
        .select()

    setIsOpen(false)
    setIsLoading(false)
    form.reset()

    onRefresh()
  }

  React.useImperativeHandle(ref, () => ({
    update(bookmark: Bookmark) {
      form.reset(bookmark)
      setIsEdit(true)
      setCurrentBookmark(bookmark)
      setIsOpen(true)
    },
  }))

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>Create</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isEdit ? 'Update' : 'Create'}
            {' '}
            bookmark
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="logo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo</FormLabel>
                  <FormControl>
                    <div className="flex space-x-2">
                      <Input {...field} />
                      <div className="relative">
                        <input
                          type="file"
                          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                          onChange={handleChangeFile}
                        />
                        <Button variant="outline">
                          选择文件
                        </Button>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Url</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
})

export default CreateButton

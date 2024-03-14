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

const formSchema = z.object({
  title: z.string().min(2).max(50),
  logo: z.string().url().optional(),
  url: z.string().url(),
  description: z.string().max(255),
})

interface CreateButtonProps {
  onRefresh: () => void
}

export default function CreateButton({ onRefresh }: CreateButtonProps) {
  const supabase = createClient()

  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [fileName, setFileName] = React.useState<string>('')
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
      setFileName(fileName)
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    const { data: { user } } = await supabase.auth.getUser()
    await supabase
      .from('bookmarks')
      .insert([{ ...values, logo: fileName, user_id: user?.id }])
      .select()

    setIsOpen(false)
    setIsLoading(false)
    form.reset()

    onRefresh()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open: boolean) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button>Create</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create bookmark</DialogTitle>
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
                    <Input {...field} type="file" onChange={handleChangeFile} />
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
}

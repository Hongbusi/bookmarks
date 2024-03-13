'use client'

import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'

export default async function CreateButton() {
  const supabase = createClient()

  const create = async () => {
    await supabase
      .from('bookmarks')
      .insert([
        { title: 'title', url: 'url', description: 'description', logo: 'logo' },
      ])
      .select()
  }

  return (<Button onClick={create}>Create</Button>)
}

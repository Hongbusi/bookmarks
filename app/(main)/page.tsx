import CreateButton from './create-button'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = createClient()

  const { data: bookmarks } = await supabase.from('bookmarks').select('*')

  return (
    <div className="container">
      <h1>Bookmarks</h1>
      <pre>{JSON.stringify(bookmarks, null, 2)}</pre>
      <CreateButton />
    </div>
  )
}

import Link from 'next/link'
import { Bookmark } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = createClient()

  const { data: bookmarks } = await supabase.from('bookmarks').select('*')

  return (
    <div className="container">
      <div className="grid grid-cols-8 gap-2 mt-4">
        {bookmarks.map(bookmark => (
          <Link
            href={bookmark.url}
            target="_blank"
            key={Bookmark.id}
          >
            <div className="p-4 border">
              <h2>{bookmark.title}</h2>
              <p className="text-sm">{bookmark.description}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

import Link from 'next/link'
import Image from 'next/image'

import { createClient } from '@/lib/supabase/server'
import type { Bookmark } from '@/types'

export default async function Home() {
  const supabase = createClient()

  const { data: bookmarks } = await supabase.from('bookmarks').select('*') as { data: Bookmark[] }

  return (
    <div className="container">
      <div className="grid grid-cols-6 gap-2 mt-4">
        {bookmarks.map(bookmark => (
          <Link
            href={bookmark.url}
            target="_blank"
            key={bookmark.id}
          >
            <div className="flex p-4 border">
              <div className="w-[56px]">
                {bookmark.logo
                  ? (
                    <Image
                      className="rounded-full border"
                      src={bookmark.logo}
                      width={56}
                      height={56}
                      alt={bookmark.title}
                    />
                    )
                  : (
                    <div className="flex justify-center items-center w-[56px] h-[56px] text-2xl rounded-full border">
                      {bookmark.title.charAt(0)}
                    </div>
                    )}
              </div>
              <div className="flex flex-col justify-between pl-4 w-[calc(100%-56px)]">
                <h2 className="truncate">{bookmark.title}</h2>
                <p className="text-sm truncate">{bookmark.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

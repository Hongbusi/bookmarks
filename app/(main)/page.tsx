import Link from 'next/link'
import Image from 'next/image'

import type { Bookmark } from '@/types'
import { createClient } from '@/lib/supabase/server'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

function BookmarkLogo(bookmark: Bookmark) {
  const { title, logo } = bookmark
  if (!logo) {
    return (
      <div className="w-[56px]">
        <div className="flex justify-center items-center w-[56px] h-[56px] text-2xl rounded-full border">
          {title.charAt(0)}
        </div>
      </div>
    )
  }
  return (
    <div className="w-[56px]">
      <Image
        className="rounded-full border"
        src={logo}
        width={56}
        height={56}
        alt={title}
      />
    </div>
  )
}

export default async function Home() {
  const supabase = createClient()

  const { data: bookmarks } = await supabase.from('bookmarks').select('*') as { data: Bookmark[] }

  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
        {bookmarks.map(bookmark => (
          <HoverCard key={bookmark.id}>
            <HoverCardTrigger asChild>
              <Link href={bookmark.url} target="_blank">
                <div className="flex p-4 border">
                  <BookmarkLogo {...bookmark} />
                  <div className="flex flex-col justify-between pl-4 w-[calc(100%-56px)]">
                    <h2 className="truncate">{bookmark.title}</h2>
                    <p className="text-sm opacity-75 truncate">{bookmark.description}</p>
                  </div>
                </div>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex space-x-4">
                <BookmarkLogo {...bookmark} />
                <div className="w-[calc(100%-56px)] space-y-1">
                  <h4>{bookmark.title}</h4>
                  <p className="text-xs opacity-75">{bookmark.description}</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  )
}

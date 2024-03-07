import { GoogleAnalytics as _GoogleAnalytics } from '@next/third-parties/google'

import { siteConfig } from '@/config/site'

export function GoogleAnalytics() {
  if (process.env.NODE_ENV === 'production' && !siteConfig.gaId)
    return null

  return <_GoogleAnalytics gaId={siteConfig.gaId} />
}

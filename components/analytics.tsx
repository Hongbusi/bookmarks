import { GoogleAnalytics } from '@next/third-parties/google'

import { siteConfig } from '@/config/site'

export function Analytics() {
  if (process.env.NODE_ENV === 'production' && !siteConfig.gaId)
    return null

  return <GoogleAnalytics gaId={siteConfig.gaId} />
}

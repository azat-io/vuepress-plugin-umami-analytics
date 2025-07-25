import { defineClientConfig } from '@vuepress/client'

declare let __UMAMI_ANALYTICS_ID__: string
declare let __UMAMI_ANALYTICS_SRC__: string
declare let __UMAMI_ANALYTICS_HOST_URL__: undefined | string | null
declare let __UMAMI_ANALYTICS_AUTO_TRACK__: undefined | boolean | null
declare let __UMAMI_ANALYTICS_DO_NOT_TRACK__: undefined | boolean | null
declare let __UMAMI_ANALYTICS_CACHE__: undefined | boolean | null
declare let __UMAMI_ANALYTICS_DOMAINS__: undefined | string[] | null
declare let __VUEPRESS_SSR__: boolean

export default defineClientConfig({
  enhance: () => {
    if (__VUEPRESS_SSR__) {
      return
    }

    let scriptTag = document.createElement('script')
    scriptTag.async = true
    scriptTag.src = __UMAMI_ANALYTICS_SRC__
    scriptTag.dataset['websiteId'] = __UMAMI_ANALYTICS_ID__
    if (__UMAMI_ANALYTICS_HOST_URL__) {
      scriptTag.dataset['hostUrl'] = __UMAMI_ANALYTICS_HOST_URL__
    }
    if (__UMAMI_ANALYTICS_AUTO_TRACK__) {
      scriptTag.dataset['autoTrack'] = `${__UMAMI_ANALYTICS_AUTO_TRACK__}`
    }
    if (__UMAMI_ANALYTICS_DO_NOT_TRACK__) {
      scriptTag.dataset['doNotTrack'] = `${__UMAMI_ANALYTICS_DO_NOT_TRACK__}`
    }
    if (__UMAMI_ANALYTICS_CACHE__) {
      scriptTag.dataset['cache'] = `${__UMAMI_ANALYTICS_CACHE__}`
    }
    if (__UMAMI_ANALYTICS_DOMAINS__) {
      scriptTag.dataset['domains'] = __UMAMI_ANALYTICS_DOMAINS__.join(',')
    }
    document.body.append(scriptTag)
  },
})

import { defineClientConfig } from '@vuepress/client'

declare let __UMAMI_ANALYTICS_ID__: string
declare let __UMAMI_ANALYTICS_SRC__: string
declare let __UMAMI_ANALYTICS_HOST_URL__: undefined | string | null
declare let __UMAMI_ANALYTICS_AUTO_TRACK__: undefined | boolean | null
declare let __UMAMI_ANALYTICS_DO_NOT_TRACK__: undefined | boolean | null
declare let __UMAMI_ANALYTICS_CACHE__: undefined | boolean | null
declare let __UMAMI_ANALYTICS_DOMAINS__: undefined | string[] | null

export default defineClientConfig({
  enhance: () => {
    if (__VUEPRESS_SSR__) {
      return
    }

    let scriptTag = document.createElement('script')
    scriptTag.async = true
    scriptTag.src = __UMAMI_ANALYTICS_SRC__
    scriptTag.setAttribute('data-website-id', __UMAMI_ANALYTICS_ID__)
    if (__UMAMI_ANALYTICS_HOST_URL__) {
      scriptTag.setAttribute('data-host-url', __UMAMI_ANALYTICS_HOST_URL__)
    }
    if (__UMAMI_ANALYTICS_AUTO_TRACK__) {
      scriptTag.setAttribute(
        'data-auto-track',
        '' + __UMAMI_ANALYTICS_AUTO_TRACK__,
      )
    }
    if (__UMAMI_ANALYTICS_DO_NOT_TRACK__) {
      scriptTag.setAttribute(
        'data-do-not-track',
        '' + __UMAMI_ANALYTICS_DO_NOT_TRACK__,
      )
    }
    if (__UMAMI_ANALYTICS_CACHE__) {
      scriptTag.setAttribute('data-cache', '' + __UMAMI_ANALYTICS_CACHE__)
    }
    if (__UMAMI_ANALYTICS_DOMAINS__) {
      scriptTag.setAttribute(
        'data-domains',
        __UMAMI_ANALYTICS_DOMAINS__.join(','),
      )
    }
    document.body.appendChild(scriptTag)
  },
})

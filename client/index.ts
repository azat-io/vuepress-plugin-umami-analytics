import { defineClientConfig } from '@vuepress/client'

declare let __UMAMI_ANALYTICS_ID__: string
declare let __UMAMI_ANALYTICS_SRC__: string

export default defineClientConfig({
  enhance() {
    if (__VUEPRESS_SSR__) {
      return
    }
    let scriptTag = document.createElement('script')
    scriptTag.async = true
    scriptTag.src = __UMAMI_ANALYTICS_SRC__
    scriptTag.setAttribute('data-website-id', __UMAMI_ANALYTICS_ID__)
    document.body.appendChild(scriptTag)
  },
})

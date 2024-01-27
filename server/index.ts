import type { Plugin } from '@vuepress/core'

import { getDirname, path } from '@vuepress/utils'

interface UmamiAnalyticsPluginOptions {
  doNotTrack?: boolean
  autoTrack?: boolean
  domains?: string[]
  hostUrl?: string
  cache?: boolean
  src: string
  id: string
}

let __dirname = getDirname(import.meta.url)

export let umamiAnalyticsPlugin =
  ({
    doNotTrack,
    autoTrack,
    hostUrl,
    domains,
    cache,
    src,
    id,
  }: UmamiAnalyticsPluginOptions): Plugin =>
  app => {
    let plugin = {
      name: 'vuepress-plugin-umami-analytics',
    }

    if (app.env.isDev) {
      return plugin
    }

    return {
      ...plugin,
      define: {
        __UMAMI_ANALYTICS_DO_NOT_TRACK__: doNotTrack,
        __UMAMI_ANALYTICS_AUTO_TRACK__: autoTrack,
        __UMAMI_ANALYTICS_HOST_URL__: hostUrl,
        __UMAMI_ANALYTICS_DOMAINS__: domains,
        __UMAMI_ANALYTICS_CACHE__: cache,
        __UMAMI_ANALYTICS_SRC__: src,
        __UMAMI_ANALYTICS_ID__: id,
      },
      clientConfigFile: path.resolve(__dirname, '../client/index.js'),
    }
  }

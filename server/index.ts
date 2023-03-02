import type { Plugin } from '@vuepress/core'

import { getDirname, path } from '@vuepress/utils'

interface UmamiAnalyticsPluginOptions {
  id: string
  src: string
}

let __dirname = getDirname(import.meta.url)

export let umamiAnalyticsPlugin =
  ({ id, src }: UmamiAnalyticsPluginOptions): Plugin =>
  app => {
    let plugin = {
      name: 'vuepress-plugin-umami-analytics',
    }

    if (app.env.isDev) {
      return plugin
    }

    return {
      ...plugin,
      clientConfigFile: path.resolve(__dirname, '../client/index.js'),
      define: {
        __UMAMI_ANALYTICS_ID__: id,
        __UMAMI_ANALYTICS_SRC__: src,
      },
    }
  }

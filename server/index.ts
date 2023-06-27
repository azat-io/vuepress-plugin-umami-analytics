import type { Plugin } from '@vuepress/core'

import { getDirname, path } from '@vuepress/utils'

interface UmamiAnalyticsPluginOptions {
  src: string
  id: string
}

let __dirname = getDirname(import.meta.url)

export let umamiAnalyticsPlugin =
  ({ src, id }: UmamiAnalyticsPluginOptions): Plugin =>
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
        __UMAMI_ANALYTICS_SRC__: src,
        __UMAMI_ANALYTICS_ID__: id,
      },
      clientConfigFile: path.resolve(__dirname, '../client/index.js'),
    }
  }

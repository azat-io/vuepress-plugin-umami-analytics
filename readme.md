# vuepress-plugin-umami-analytics

<img src="https://avatars.githubusercontent.com/u/48539483?s=100" align="right" alt="VuePress" />

![Version](https://img.shields.io/npm/v/vuepress-plugin-umami-analytics.svg)
![Downloads](https://img.shields.io/npm/dm/vuepress-plugin-umami-analytics.svg)

VuePress v2 plugin for injecting [Umami](https://umami.is) analytics script into your app code. Umami is a self-hosted, privacy-friendly alternative to Google Analytics.

## Installation

```sh
npm install --save vuepress-plugin-umami-analytics
```

## Usage

Add plugin to your VuePress config:

```js
import { umamiAnalyticsPlugin } from 'vuepress-plugin-umami-analytics'

let isProd = process.env.NODE_ENV === 'production'

export default {
  plugins: [
    isProd
      ? umamiAnalyticsPlugin({
          /* options */
        })
      : [],
  ],
}
```

## Options

### id

- Type: `string`

- Required: `true`

- Details:

  Add website to Umami analytics and get parameters from tracking code. Put data-website-id here.

### src

- Type: `string`

- Required: `true`

- Details:

  Link to Umami analytics script.

![Umami tracking code](https://user-images.githubusercontent.com/5698350/190417132-fcedc6cb-636d-4634-a682-837a6f56c797.png)

## Contribution

Pull requests are welcome.

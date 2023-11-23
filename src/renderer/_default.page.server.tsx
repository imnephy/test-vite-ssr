import { queryClient } from '@app/lib'
import { QueryClientProvider } from '@tanstack/react-query'
import ReactDOMServer from 'react-dom/server'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server'

import { PageShell } from './PageShell'
import type { PageContextServer } from './types'

// See https://vike.dev/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  // This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <QueryClientProvider client={queryClient}>
        <Page {...pageProps} />
      </QueryClientProvider>
    </PageShell>,
  )

  // See https://vike.dev/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + Vike'

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8" />
  <link rel="icon" href="" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${desc}" />
  <title>${title}</title>
  </head>
  <body>
  <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
  </body>
  </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    },
  }
}
export { render }

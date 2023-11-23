import { queryClient } from '@app/lib'
import { QueryClientProvider } from '@tanstack/react-query'
import { hydrateRoot } from 'react-dom/client'

import { PageShell } from './PageShell'
import type { PageContextClient } from './types'
// This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  if (!Page)
    throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const root = document.querySelector('#react-root')
  if (!root) throw new Error('DOM element #react-root not found')
  hydrateRoot(
    root,
    <PageShell pageContext={pageContext}>
      <QueryClientProvider client={queryClient}>
        <Page {...pageProps} />
      </QueryClientProvider>
    </PageShell>,
  )
}
export { render }

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vike.dev/clientRouting */

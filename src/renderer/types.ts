export type {
  PageContextWithServerRouting as PageContext,
  /*
  // When using Client Routing https://vike.dev/clientRouting
  PageContextClient,
  PageContext,
  / */
  // When using Server Routing
  PageContextClientWithServerRouting as PageContextClient,
  PageContextServer,
  //* /
} from 'vite-plugin-ssr/types'

// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      Page: Page
      pageProps?: PageProperties
      urlPathname: string
      exports: {
        documentProps?: {
          title?: string
          description?: string
        }
      }
    }
  }
}

type Page = (pageProperties: PageProperties) => React.ReactElement
type PageProperties = Record<string, unknown>

export type { PageProperties as PageProps }

// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vike.dev/pageContext-anywhere

import React, { useContext } from 'react'

import type { PageContext } from './types'

const Context = React.createContext<PageContext>(undefined as unknown as PageContext)

function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContext
  children: React.ReactNode
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

function usePageContext() {
  return useContext(Context)
}

export { usePageContext }
export { PageContextProvider }

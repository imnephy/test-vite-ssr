import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactElement } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

interface IComposeProvidersProperties {
  children?: ReactElement
}
export const queryClient = new QueryClient({})

export const ComposeProviders = (props: IComposeProvidersProperties) => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        {props.children}
        <Toaster />
      </QueryClientProvider>
    </HelmetProvider>
  )
}

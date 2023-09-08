// Root contains the main dependencies and providers of the base app
//  - React, ReactDom, RecoilRoot, HelmetProvider, ThemeProvider, MUI-core)
// App contains the main structure of the base app
// These are the two main chunks that are used to render the core structure of the app
// Importing them with Promise.all (by using HTTP/2 multiplexing) we can load them in parallel
// and achieve the best possible performance

async function bootstrap() {
  Promise.all([import('@app/root.component'), import('@app/app.component')]).then(
    ([{ default: render }, { default: App }]) => {
      render(App)
    },
  )
}

bootstrap()

export {}

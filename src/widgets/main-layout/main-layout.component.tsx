import { Outlet } from 'react-router-dom'

import { Footer } from './footer'
import { Header } from './header'
import { Main } from './main'

export interface IMainPageLayoutProperties extends React.ComponentProps<'main'> {}

export const MainLayout = () => {
  return (
    <>
      <Header className="h-10 bg-[green]" />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

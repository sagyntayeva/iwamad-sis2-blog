import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

// Header and footer stay, only <Outlet /> changes
function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout

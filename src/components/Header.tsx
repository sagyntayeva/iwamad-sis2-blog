import { Link, NavLink } from 'react-router'
import logo from '../assets/logo.svg'

type NavItem = {
  to: string
  label: string
}

const navItems: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/posts', label: 'Posts' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__brand">
        <img src={logo} alt="" width={32} height={32} />
        Ranida's Study Blog
      </Link>
      <nav className="site-nav" aria-label="Main">
        {navItems.map((item) => (
          // end: "/" is active only on the home page
          <NavLink key={item.to} to={item.to} end={item.to === '/'}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header

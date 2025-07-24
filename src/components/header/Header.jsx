import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation()
  return (
    <header className="h-20 bg-neutral-900 w-full sticky top-0 left-0">
      <nav className="container h-full flex items-center justify-between">
        <NavLink to={'/'}>
          <img src={logo} alt="Header logo" className="size-10" />
        </NavLink>
        <div>
          <Link
            className="px-3 py-2 bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-600 sm:active:bg-neutral-700 rounded-border"
            to={
              pathname === '/info'
                ? '/'
                : pathname.startsWith('/update')
                  ? '/'
                  : '/info'
            }
          >
            {pathname == '/info'
              ? 'Go Home'
              : pathname.startsWith('/update')
                ? 'Go Home'
                : 'Add Info'}
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default React.memo(Header)

import * as React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'components/Logo/Logo'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'
import HeaderBurgerMenu from './HeaderBurgerMenu/HeaderBurgerMenu'
import burger_menu from 'assets/burger_menu.png'
import './Header.scss'

type Props = {}

const Header = (props: Props) => {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const toggleDrawer =
    (openValue: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpen(openValue)
    }

  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <div className="header-content">
          <button
            className="header-content-burger"
            type="submit"
            onClick={handleDrawerOpen}
          >
            <img
              className="header-content-burger-img"
              src={burger_menu}
              alt=""
            />
          </button>
          <nav className="header-content-menu">
            <HeaderMenu />
          </nav>
          <Link
            to="/contact"
            reloadDocument={true}
            className="header-content-contact-me"
          >
            <button className="header-content-contact-me-button" type="submit">
              CONTACT ME
            </button>
          </Link>
        </div>
      </div>
      <HeaderBurgerMenu
        open={open}
        toggleDrawer={toggleDrawer}
        handleDrawerClose={handleDrawerClose}
      />
    </header>
  )
}

export default Header

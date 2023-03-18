import favorites from 'assets/favorites.png'
import { NavLink } from 'react-router-dom'
import HeaderMenuItem from './HeaderMenuItem'

type Props = {}

const HeaderMenu = (props: Props) => {
  return (
    <nav className="header-content-menu">
      <ul className="header-content-menu-list">
        <HeaderMenuItem to="/">HOME</HeaderMenuItem>
        <HeaderMenuItem to="/blog">BLOG</HeaderMenuItem>
        <HeaderMenuItem to="/partnership">PARTNERSHIP</HeaderMenuItem>
        <HeaderMenuItem to="/aboutme">ABOUT ME</HeaderMenuItem>
        <HeaderMenuItem to="/contact">CONTACT</HeaderMenuItem>
        <HeaderMenuItem to="/favorites">
          FAVORITES{' '}
          <img
            className="header-content-menu-list-wrapper-image"
            src={favorites}
            alt=""
          />{' '}
          0
        </HeaderMenuItem>
      </ul>
    </nav>
  )
}

export default HeaderMenu

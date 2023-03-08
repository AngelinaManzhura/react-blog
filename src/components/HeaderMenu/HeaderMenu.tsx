import favorites from 'assets/favorites.png'
import { NavLink } from 'react-router-dom'

type Props = {}

const HeaderMenu = (props: Props) => {
  return (
    <nav className="header-content-menu">
      <ul className="header-content-menu-list">
        <li className="header-content-menu-list-item">
          <NavLink to="/" className="header-content-menu-list-item-link">
            HOME
          </NavLink>
        </li>
        <li className="header-content-menu-list-item">
          <NavLink to="/blog" className="header-content-menu-list-item-link">
            BLOG
          </NavLink>
        </li>
        <li className="header-content-menu-list-item">
          <NavLink
            to="/partnership"
            className="header-content-menu-list-item-link"
          >
            PARTNERSHIP
          </NavLink>
        </li>
        <li className="header-content-menu-list-item">
          <NavLink to="/aboutme" className="header-content-menu-list-item-link">
            ABOUT ME
          </NavLink>
        </li>
        <li className="header-content-menu-list-item">
          <NavLink to="/contact" className="header-content-menu-list-item-link">
            CONTACT
          </NavLink>
        </li>
        <li className="header-content-menu-list-item header-content-menu-list-wrapper">
          <NavLink
            to="/favorites"
            className="header-content-menu-list-item-link"
          >
            FAVORITES{' '}
            <img
              className="header-content-menu-list-wrapper-image"
              src={favorites}
              alt=""
            />{' '}
            0
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu

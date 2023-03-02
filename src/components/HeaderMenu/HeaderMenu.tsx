import favorites from 'assets/favorites.png'

type Props = {}

const HeaderMenu = (props: Props) => {
  return (
    <nav className="header-content-menu">
      <ul className="header-content-menu-list">
        <li className="header-content-menu-list-item">
          <a className="header-content-menu-list-item-link" href="">
            HOME
          </a>
        </li>
        <li className="header-content-menu-list-item">
          <a className="header-content-menu-list-item-link" href="">
            BLOG
          </a>
        </li>
        <li className="header-content-menu-list-item">
          <a className="header-content-menu-list-item-link" href="">
            PARTNERSHIP
          </a>
        </li>
        <li className="header-content-menu-list-item">
          <a className="header-content-menu-list-item-link" href="">
            ABOUT ME
          </a>
        </li>
        <li className="header-content-menu-list-item">
          <a className="header-content-menu-list-item-link" href="">
            CONTACT
          </a>
        </li>
        <li className="header-content-menu-list-item header-content-menu-list-wrapper">
          <a className="header-content-menu-list-item-link" href="">
            FAVORITES{' '}
            <img
              className="header-content-menu-list-wrapper-image"
              src={favorites}
              alt=""
            />{' '}
            0
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu

import { Link } from 'react-router-dom'
import Logo from 'components/Logo/Logo'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'
import burger_menu from 'assets/burger_menu.png'
import './Header.scss'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <div className="header-content">
          <button className="header-content-burger" type="submit">
            <img
              className="header-content-burger-img"
              src={burger_menu}
              alt=""
            />
          </button>
          <HeaderMenu />
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
    </header>
  )
}

export default Header

import Logo from 'components/Logo/Logo'
import burger_menu from 'assets/burger_menu.png'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'
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
          <button className="header-content-button" type="submit">
            CONTACT ME
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

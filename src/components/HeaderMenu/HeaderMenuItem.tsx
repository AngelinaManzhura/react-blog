import { NavLink } from 'react-router-dom'
import 'container/Header/Header.scss'

type Props = {
  to: string
  onClick: () => void
  children: React.ReactNode
}

const HeaderMenuItem = ({ to, children, onClick }: Props) => {
  return (
    <li className="header-content-menu-list-item" onClick={onClick}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'header-content-menu-list-item-link header-content-menu-list-item-link-active'
            : 'header-content-menu-list-item-link'
        }
      >
        {children}
      </NavLink>
    </li>
  )
}

export default HeaderMenuItem

import { NavLink } from 'react-router-dom'
import '../../container/Header/Header.scss'

type Props = {
  to: string
  children: React.ReactNode
}

const HeaderMenuItem = ({ to, children }: Props) => {
  return (
    <li className="header-content-menu-list-item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'header-content-menu-list-item-link-active'
            : 'header-content-menu-list-item-link'
        }
      >
        {children}
      </NavLink>
    </li>
  )
}

export default HeaderMenuItem

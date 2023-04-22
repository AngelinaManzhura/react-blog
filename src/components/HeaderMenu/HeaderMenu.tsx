import { useAppSelector } from 'redux/hooks'
import HeaderMenuItem from './HeaderMenuItem'
import navArray from 'utils/navArray'

type Props = {
  onClick?: () => void
}

const HeaderMenu = ({ onClick = () => {} }: Props) => {
  const likeReducer = useAppSelector((state) => state.likeReducer)

  const filteredObject = Object.fromEntries(
    Object.entries(likeReducer).filter((item) => item[1] === true)
  )

  const lengthFiltered = Object.entries(filteredObject).filter(
    (item) => item.length
  )

  return (
    <ul className="header-content-menu-list">
      {navArray.map((el) => (
        <HeaderMenuItem key={el.label} to={el.link} onClick={onClick}>
          {el.label}
          {el.icon && (
            <img
              className="header-content-menu-list-wrapper-image"
              src={el.icon}
              alt=""
            />
          )}
          {el.label === 'FAVORITES' && Object.keys(lengthFiltered).length}
        </HeaderMenuItem>
      ))}
    </ul>
  )
}

export default HeaderMenu

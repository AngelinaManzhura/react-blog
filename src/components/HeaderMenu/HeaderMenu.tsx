import favorites from 'assets/favorites.png'
import HeaderMenuItem from './HeaderMenuItem'
import { useAppSelector } from 'redux/hooks'
import relatedPostsArray, {
  RelatedPosts,
  getRelatedPostsObject,
} from 'utils/relatedPostsArray'

type Props = {
  postsObject?: {
    [id: number]: RelatedPosts
  }
}

const HeaderMenu = ({
  postsObject = getRelatedPostsObject(relatedPostsArray),
}: Props) => {
  const likeReducer = useAppSelector((state) => state.likeReducer)

  const filteredObject = Object.fromEntries(
    Object.entries(likeReducer).filter((item) => item[1] === true)
  )

  const lengthFiltered = Object.entries(filteredObject).filter(
    (item) => item.length
  )

  console.log(lengthFiltered)

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
          {Object.keys(lengthFiltered).length}
        </HeaderMenuItem>
      </ul>
    </nav>
  )
}

export default HeaderMenu

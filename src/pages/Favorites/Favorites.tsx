import relatedPostsArray, {
  RelatedPosts,
  getRelatedPostsObject,
} from 'utils/relatedPostsArray'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import related_posts_circle from 'assets/related_posts_circle.svg'
import favorites_banner from 'assets/favorites_banner.webp'
import './Favorites.scss'

type Props = {
  postsObject?: {
    [id: number]: RelatedPosts
  }
}

const Favorites = ({
  postsObject = getRelatedPostsObject(relatedPostsArray),
}: Props) => {
  const likeReducer = useAppSelector((state) => state.likeReducer)

  const filteredObject = Object.fromEntries(
    Object.entries(likeReducer).filter((item) => item[1] === true)
  )

  const dispatch = useAppDispatch()

  return (
    <>
      <main className="favorites">
        <section className="blog-banner">
          <img className="blog-banner-image" src={favorites_banner} alt="" />
          <div className="blog-banner-content">
            <div className="blog-banner-content-logo">
              <img src={related_posts_circle} alt="" />
              <span className="blog-banner-content-logo-description">
                BEBLOG
              </span>
            </div>
            <h1 className="blog-banner-content-title">Favorites</h1>
          </div>
        </section>

        <section className="favorites-content">
          <ul className="blog-posts-content-information-list">
            {Object.keys(filteredObject).map((id) => (
              <li className="blog-posts-content-information-list-item">
                <img
                  className="blog-posts-content-information-list-item-image"
                  src={postsObject[parseInt(id)].image}
                  alt=""
                />
                <div className="blog-posts-content-information-list-item-description">
                  <div className="blog-posts-content-information-list-item-description-wrapper">
                    <a
                      className="blog-posts-content-information-list-item-description-admin"
                      href="/"
                    >
                      <img
                        className="blog-posts-content-information-list-item-description-admin-icon"
                        src={postsObject[parseInt(id)].adminIcon}
                        alt=""
                      />
                      <span className="blog-posts-content-information-list-item-description-admin-information">
                        {postsObject[parseInt(id)].adminInformation}
                      </span>
                    </a>
                    <a
                      className="blog-posts-content-information-list-item-description-date"
                      href="/"
                    >
                      <img
                        className="blog-posts-content-information-list-item-description-date-icon"
                        src={postsObject[parseInt(id)].dateIcon}
                        alt=""
                      />
                      <span className="blog-posts-content-information-list-item-description-date-information">
                        {postsObject[parseInt(id)].date}
                      </span>
                    </a>
                    <a
                      className="blog-posts-content-information-list-item-description-categories"
                      href="/"
                    >
                      <span className="blog-posts-content-information-list-item-description-categories-information">
                        {postsObject[parseInt(id)].categoriesInformation}
                      </span>
                      <img
                        className="blog-posts-content-information-list-item-description-categories-icon"
                        src={postsObject[parseInt(id)].categoriesIcon}
                        alt=""
                      />
                    </a>
                    <button
                      className="blog-posts-content-information-list-item-description-favorites"
                      type="submit"
                      onClick={() => dispatch(toggleLike(id))}
                    >
                      {filteredObject[id] ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </button>
                  </div>
                  <h2>
                    <Link
                      className="blog-posts-content-information-list-item-description-title"
                      to={`/articles/${postsObject[parseInt(id)].id}`}
                    >
                      {postsObject[parseInt(id)].title}{' '}
                    </Link>
                  </h2>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

export default Favorites

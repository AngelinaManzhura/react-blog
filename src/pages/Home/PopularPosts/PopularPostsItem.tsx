import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { RelatedPosts } from 'utils/relatedPostsArray'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { toggleLike } from 'redux/likeReducer'

type Props = {
  post: RelatedPosts
}

const PopularPostsItem = ({ post }: Props) => {
  const isLiked = useAppSelector((state) => state.likeReducer[post.id])
  const dispatch = useAppDispatch()

  return (
    <li key={post.id} className="popular-posts-content-another-list-item">
      <img
        className="popular-posts-content-another-list-item-image"
        src={post.image}
        alt=""
      />
      <div className="popular-posts-content-another-list-item-description">
        <div className="popular-posts-content-another-list-item-description-wrapper">
          <a
            className="popular-posts-content-another-list-item-description-admin"
            href="/"
          >
            <img
              className="popular-posts-content-another-list-item-description-admin-icon"
              src={post.adminIcon}
              alt="/"
            />
            <span className="popular-posts-content-another-list-item-description-admin-information">
              {post.adminInformation}
            </span>
          </a>
          <a
            className="popular-posts-content-another-list-item-description-date"
            href="/"
          >
            <img
              className="popular-posts-content-another-list-item-description-date-icon"
              src={post.dateIcon}
              alt=""
            />
            <span className="popular-posts-content-another-list-item-description-date-information">
              {post.date}
            </span>
          </a>
          <a
            className="popular-posts-content-another-list-item-description-categories"
            href="/"
          >
            <span className="popular-posts-content-another-list-item-description-categories-information">
              {post.categoriesInformation}
            </span>
            <img
              className="popular-posts-content-another-list-item-description-categories-icon"
              src={post.categoriesIcon}
              alt=""
            />
          </a>

          {/* <img
          className="popular-posts-content-another-list-item-description-favorites-icon"
          src={el.favoritesIcon}
          alt=""
        /> */}
          <button
            className="popular-posts-content-another-list-item-description-favorites"
            type="submit"
            onClick={() => dispatch(toggleLike(post.id))}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </button>
        </div>
        <h2>
          <Link
            className="popular-posts-content-another-list-item-description-title"
            to={`/articles/${post.id}`}
          >
            {post.title}
          </Link>
        </h2>
      </div>
    </li>
  )
}

export default PopularPostsItem

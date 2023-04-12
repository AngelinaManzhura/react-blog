import { RelatedPosts } from 'utils/relatedPostsArray'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { toggleLike } from 'redux/likeReducer'
import { Link } from 'react-router-dom'

type Props = {
  post: RelatedPosts
}

const BlogItem = ({ post }: Props) => {
  const isLiked = useAppSelector((state) => state.likeReducer[post.id])
  const dispatch = useAppDispatch()

  return (
    <>
      <li key={post.id} className="blog-posts-content-information-list-item">
        <img
          className="blog-posts-content-information-list-item-image"
          src={post.image}
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
                src={post.adminIcon}
                alt=""
              />
              <span className="blog-posts-content-information-list-item-description-admin-information">
                {post.adminInformation}
              </span>
            </a>
            <a
              className="blog-posts-content-information-list-item-description-date"
              href="/"
            >
              <img
                className="blog-posts-content-information-list-item-description-date-icon"
                src={post.dateIcon}
                alt=""
              />
              <span className="blog-posts-content-information-list-item-description-date-information">
                {post.date}
              </span>
            </a>
            <a
              className="blog-posts-content-information-list-item-description-categories"
              href="/"
            >
              <span className="blog-posts-content-information-list-item-description-categories-information">
                {post.categoriesInformation}
              </span>
              <img
                className="blog-posts-content-information-list-item-description-categories-icon"
                src={post.categoriesIcon}
                alt=""
              />
            </a>
            <button
              className="blog-posts-content-information-list-item-description-favorites"
              type="submit"
              onClick={() => dispatch(toggleLike(post.id))}
            >
              {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </button>
          </div>
          <h2>
            <Link
              className="blog-posts-content-information-list-item-description-title"
              to={`/articles/${post.id}`}
            >
              {post.title}{' '}
            </Link>
          </h2>
        </div>
      </li>
    </>
  )
}

export default BlogItem

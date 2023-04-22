import { useAppSelector } from 'redux/hooks'
import BlogItem from 'pages/Blog/BlogItem'
import related_posts_circle from 'assets/related_posts_circle.svg'
import favorites_banner from 'assets/favorites_banner.webp'
import relatedPostsArray, {
  RelatedPosts,
  getRelatedPostsObject,
} from 'utils/relatedPostsArray'
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
              <BlogItem post={postsObject[parseInt(id)]} />
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

export default Favorites

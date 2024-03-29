import { Link } from 'react-router-dom'
import Aside from 'components/Aside/Aside'
import PopularPostsItem from './PopularPostsItem'
import relatedPostsArray from 'utils/relatedPostsArray'
import popular_posts_circle from 'assets/popular_posts_circle.svg'
import pinned_post_image from 'assets/pinned_post_image.png'
import popular_post_admin_icon from 'assets/popular_post_admin_icon.png'
import popular_post_date_icon from 'assets/popular_post_date_icon.svg'
import popular_post_categories_icon from 'assets/popular_post_categories_icon.png'
import './PopularPosts.scss'

type Props = {}

const PopularPosts = (props: Props) => {
  return (
    <section className="popular-posts">
      <div className="popular-posts-container">
        <div className="popular-posts-content">
          <section className="popular-posts-content-pinned">
            <div className="popular-posts-content-pinned-logo">
              <img src={popular_posts_circle} alt="" />
              <span className="popular-posts-content-pinned-logo-description">
                PINNED POST
              </span>
            </div>
            <div className="popular-posts-content-pinned-post">
              <img
                className="popular-posts-content-pinned-post-image"
                src={pinned_post_image}
                alt=""
              />
              <div className="popular-posts-content-pinned-post-description">
                <div className="popular-posts-content-pinned-post-description-wrapper">
                  <a
                    className="popular-posts-content-pinned-post-description-admin"
                    href="/"
                  >
                    <img
                      className="popular-posts-content-pinned-post-description-admin-icon"
                      src={popular_post_admin_icon}
                      alt=""
                    />
                    <span className="popular-posts-content-pinned-post-description-admin-information">
                      admin
                    </span>
                  </a>
                  <a
                    className="popular-posts-content-pinned-post-description-date"
                    href="/"
                  >
                    <img
                      className="popular-posts-content-pinned-post-description-date-icon"
                      src={popular_post_date_icon}
                      alt=""
                    />
                    <span className="popular-posts-content-pinned-post-description-date-information">
                      January 14, 2022
                    </span>
                  </a>
                  <a
                    className="popular-posts-content-pinned-post-description-categories"
                    href="/"
                  >
                    <span className="popular-posts-content-pinned-post-description-categories-information">
                      Categories
                    </span>
                    <img
                      className="popular-posts-content-pinned-post-description-categories-icon"
                      src={popular_post_categories_icon}
                      alt=""
                    />
                  </a>
                </div>
                <h2>
                  <Link
                    to="/articles/10"
                    className="popular-posts-content-pinned-post-description-title"
                  >
                    Vestibulum ante sem et gravida ullamcorper feugiat
                  </Link>
                </h2>
              </div>
            </div>
          </section>
          <section className="popular-posts-content-another">
            <div className="popular-posts-content-another-container">
              <ul className="popular-posts-content-another-list">
                {relatedPostsArray.slice(0, 3).map((el) => (
                  <PopularPostsItem key={el.title} post={el} />
                ))}
              </ul>
            </div>
          </section>
        </div>
        <Aside />
      </div>
    </section>
  )
}

export default PopularPosts

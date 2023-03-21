import popular_posts_circle from 'assets/popular_posts_circle.svg'
import pinned_post_image from 'assets/pinned_post_image.png'
import popular_post_admin_icon from 'assets/popular_post_admin_icon.png'
import popular_post_date_icon from 'assets/popular_post_date_icon.svg'
import popular_post_categories_icon from 'assets/popular_post_categories_icon.png'
import relatedPostsArray from 'utils/relatedPostsArray'
import Aside from 'components/Aside/Aside'
import './PopularPosts.scss'
import { Link } from 'react-router-dom'

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
                <h2 className="popular-posts-content-pinned-post-description-title">
                  Vestibulum ante sem et gravida ullamcorper feugiat
                </h2>
              </div>
            </div>
          </section>
          <section className="popular-posts-content-another">
            <div className="popular-posts-content-another-container">
              <ul className="popular-posts-content-another-list">
                {relatedPostsArray.slice(0, 3).map((el) => (
                  <li
                    key={el.id}
                    className="popular-posts-content-another-list-item"
                  >
                    <img
                      className="popular-posts-content-another-list-item-image"
                      src={el.image}
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
                            src={el.adminIcon}
                            alt="/"
                          />
                          <span className="popular-posts-content-another-list-item-description-admin-information">
                            {el.adminInformation}
                          </span>
                        </a>
                        <a
                          className="popular-posts-content-another-list-item-description-date"
                          href="/"
                        >
                          <img
                            className="popular-posts-content-another-list-item-description-date-icon"
                            src={el.dateIcon}
                            alt=""
                          />
                          <span className="popular-posts-content-another-list-item-description-date-information">
                            {el.date}
                          </span>
                        </a>
                        <a
                          className="popular-posts-content-another-list-item-description-categories"
                          href="/"
                        >
                          <span className="popular-posts-content-another-list-item-description-categories-information">
                            {el.categoriesInformation}
                          </span>
                          <img
                            className="popular-posts-content-another-list-item-description-categories-icon"
                            src={el.categoriesIcon}
                            alt=""
                          />
                        </a>
                        <a
                          className="popular-posts-content-another-list-item-description-favorites"
                          href="/"
                        >
                          <img
                            className="popular-posts-content-another-list-item-description-favorites-icon"
                            src={el.favoritesIcon}
                            alt=""
                          />
                        </a>
                      </div>
                      <h2>
                        <Link
                          className="popular-posts-content-another-list-item-description-title"
                          to={`/articles/${el.id}`}
                        >
                          {el.title}
                        </Link>
                      </h2>
                    </div>
                  </li>
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

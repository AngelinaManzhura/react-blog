import { Link } from 'react-router-dom'
import related_posts_circle from 'assets/related_posts_circle.svg'
import relatedPostsArray from 'utils/relatedPostsArray'
import './RelatedPosts.scss'

type Props = {}

const RelatedPosts = (props: Props) => {
  return (
    <section className="related-posts">
      <div className="related-posts-container">
        <div className="related-posts-content">
          <div className="related-posts-content-logo">
            <img src={related_posts_circle} alt="" />
            <span className="related-posts-content-logo-description">
              BEBLOG
            </span>
          </div>
          <h1 className="related-posts-content-title">Related posts</h1>
          <ul className="related-posts-content-list">
            {relatedPostsArray.slice(0, 3).map((el) => (
              <li key={el.id} className="related-posts-content-list-item">
                <img
                  className="related-posts-content-list-item-image"
                  src={el.image}
                  alt=""
                />
                <div className="related-posts-content-list-item-description">
                  <div className="related-posts-content-list-item-description-wrapper">
                    <a
                      className="related-posts-content-list-item-description-admin"
                      href="/"
                    >
                      <img
                        className="related-posts-content-list-item-description-admin-icon"
                        src={el.adminIcon}
                        alt=""
                      />
                      <span className="related-posts-content-list-item-description-admin-information">
                        {el.adminInformation}
                      </span>
                    </a>
                    <a
                      className="related-posts-content-list-item-description-date"
                      href="/"
                    >
                      <img
                        className="related-posts-content-list-item-description-date-icon"
                        src={el.dateIcon}
                        alt=""
                      />
                      <span className="related-posts-content-list-item-description-date-information">
                        {el.date}
                      </span>
                    </a>
                  </div>
                  <h2>
                    <Link
                      className="related-posts-content-list-item-description-title"
                      to={`/articles/${el.id}`}
                      reloadDocument={true}
                    >
                      {el.title}
                    </Link>
                  </h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default RelatedPosts

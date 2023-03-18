import { useParams } from 'react-router-dom'
import relatedPostsArray from 'utils/relatedPostsArray'
import related_posts_circle from 'assets/related_posts_circle.svg'
import blog_banner from 'assets/blog_banner.jpeg'
import blog_categories from 'assets/blog_categories.png'
import blog_tags from 'assets/blog_tags.png'
import blog_authors from 'assets/blog_authors.png'
import blog_show_all from 'assets/blog_show_all.png'
import BlogFilters from './BlogFilters/BlogFilters'
import './Blog.scss'
import useSetState from 'hooks/useSetState'

type Props = {}

export const initialFilters = {
  category: '',
  tag: '',
  author: '',
}

const Blog = (props: Props) => {
  const { category } = useParams()
  console.log(useParams())

  const filters = category
    ? {
        ...initialFilters,
        category,
      }
    : initialFilters

  const [state, setState] = useSetState(filters)

  const diplayPost = state.category
    ? relatedPostsArray.filter((post) => post.category.name === state.category)
    : relatedPostsArray

  console.log('category', category)
  console.log('diplayPost', diplayPost)

  return (
    <main className="blog">
      <section className="blog-banner">
        <img className="blog-banner-image" src={blog_banner} alt="" />
        <div className="blog-banner-content">
          <div className="blog-banner-content-logo">
            <img src={related_posts_circle} alt="" />
            <span className="blog-banner-content-logo-description">BEBLOG</span>
          </div>
          <h1 className="blog-banner-content-title">My Blog</h1>
        </div>
      </section>

      <section className="blog-posts">
        <div className="blog-posts-content">
          <div className="blog-posts-content-filters">
            {/* <div className="blog-posts-content-filters-by">
              <a className="blog-posts-content-filters-by-categories" href="">
                <img
                  className="blog-posts-content-filters-by-categories-icon"
                  src={blog_categories}
                  alt=""
                />
                <span className="blog-posts-content-filters-by-categories-information">
                  Categories
                </span>
              </a>
              <a className="blog-posts-content-filters-by-tags" href="">
                <img
                  className="blog-posts-content-filters-by-tags-icon"
                  src={blog_tags}
                  alt=""
                />
                <span className="blog-posts-content-filters-by-tags-information">
                  Tags
                </span>
              </a>
              <a className="blog-posts-content-filters-by-authors" href="">
                <img
                  className="blog-posts-content-filters-by-authors-icon"
                  src={blog_authors}
                  alt=""
                />
                <span className="blog-posts-content-filters-by-authors-information">
                  Authors
                </span>
              </a>
            </div> */}
            <BlogFilters filters={state} onChange={setState} />
            <a className="blog-posts-content-filters-show" href="">
              <img
                className="blog-posts-content-filters-show-icon"
                src={blog_show_all}
                alt=""
              />
              <span className="blog-posts-content-filters-show-information">
                Show all
              </span>
            </a>
          </div>
          <div className="blog-posts-content-information">
            <ul className="blog-posts-content-information-list">
              {diplayPost.map((el) => (
                <li
                  key={el.id}
                  className="blog-posts-content-information-list-item"
                >
                  <img
                    className="blog-posts-content-information-list-item-image"
                    src={el.image}
                    alt=""
                  />
                  <div className="blog-posts-content-information-list-item-description">
                    <div className="blog-posts-content-information-list-item-description-wrapper">
                      <a
                        className="blog-posts-content-information-list-item-description-admin"
                        href=""
                      >
                        <img
                          className="blog-posts-content-information-list-item-description-admin-icon"
                          src={el.adminIcon}
                          alt=""
                        />
                        <span className="blog-posts-content-information-list-item-description-admin-information">
                          {el.adminInformation}
                        </span>
                      </a>
                      <a
                        className="blog-posts-content-information-list-item-description-date"
                        href=""
                      >
                        <img
                          className="blog-posts-content-information-list-item-description-date-icon"
                          src={el.dateIcon}
                          alt=""
                        />
                        <span className="blog-posts-content-information-list-item-description-date-information">
                          {el.date}
                        </span>
                      </a>
                      <a
                        className="blog-posts-content-information-list-item-description-categories"
                        href=""
                      >
                        <span className="blog-posts-content-information-list-item-description-categories-information">
                          {el.categoriesInformation}
                        </span>
                        <img
                          className="blog-posts-content-information-list-item-description-categories-icon"
                          src={el.categoriesIcon}
                          alt=""
                        />
                      </a>
                      <a
                        className="blog-posts-content-information-list-item-description-favorites"
                        href=""
                      >
                        <img
                          className="blog-posts-content-information-list-item-description-favorites-icon"
                          src={el.favoritesIcon}
                          alt=""
                        />
                      </a>
                    </div>
                    <h2 className="blog-posts-content-information-list-item-description-title">
                      {el.title}
                    </h2>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog

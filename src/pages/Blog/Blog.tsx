import { useParams } from 'react-router-dom'
import relatedPostsArray from 'utils/relatedPostsArray'
import related_posts_circle from 'assets/related_posts_circle.svg'
import blog_banner from 'assets/blog_banner.jpeg'
import BlogFilters from './BlogFilters/BlogFilters'
import './Blog.scss'

import useSetState from 'hooks/useSetState'
import BlogItem from './BlogItem'

type Props = {}

export const initialFilters = {
  category: '',
  tag: '',
  author: '',
}

const Blog = (props: Props) => {
  const { category } = useParams()

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
          <BlogFilters filters={state} onChange={setState} />
          <div className="blog-posts-content-information">
            <ul className="blog-posts-content-information-list">
              {diplayPost.map((el) => (
                <BlogItem post={el} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog

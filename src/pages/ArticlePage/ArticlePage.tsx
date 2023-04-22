import { Link, useParams } from 'react-router-dom'
import relatedPostsArray, {
  getRelatedPostsObject,
  RelatedPosts,
} from 'utils/relatedPostsArray'
import Aside from 'components/Aside/Aside'
import './ArticlePage.scss'
import Arcu from './Arcu/Arcu'
import Rutrum from './Rutrum/Rutrum'
import Elementum from './Elementum/Elementum'
import ArticleShare from './ArticleShare/ArticleShare'
import See from './See/See'

type Props = {
  relatedPostsObject?: {
    [id: number]: RelatedPosts
  }
}

const ArticlePage = ({
  relatedPostsObject = getRelatedPostsObject(relatedPostsArray),
}: Props) => {
  const { id } = useParams()

  const article = relatedPostsObject[parseInt(id!)]

  return (
    <main className="article">
      <section className="article-banner">
        <img
          className="article-banner-image"
          src={article.image}
          alt="article banner"
        />
        <div className="article-banner-wrapper">
          <div className="article-banner-content">
            <h1 className="article-banner-content-title">{article.title}</h1>
            <div className="article-banner-content-description">
              <Link
                className="article-banner-content-description-link"
                to="/blog"
              >
                <img
                  className="article-banner-content-description-link-icon"
                  src={article.adminIcon}
                  alt=""
                />
                <span className="article-banner-content-description-link-information">
                  {article.adminInformation}
                </span>
              </Link>
              <div className="article-banner-content-description-link">
                <img
                  className="article-banner-content-description-link-icon"
                  src={article.dateIcon}
                  alt=""
                />
                <span className="article-banner-content-description-link-information">
                  {article.date}
                </span>
              </div>
              <Link
                className="article-banner-content-description-link"
                to={`/blog/${article.category.name}`}
              >
                <img
                  className="article-banner-content-description-link-icon"
                  src={article.categoriesIcon}
                  alt=""
                />
                <span className="article-banner-content-description-link-information">
                  {article.category.name}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="article-container">
        <div className="article-content">
          <Arcu />
          <Rutrum />
          <Elementum />
          <ArticleShare />
          <See />
        </div>
        <Aside />
      </div>
    </main>
  )
}

export default ArticlePage

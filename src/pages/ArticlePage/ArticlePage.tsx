import { useParams } from 'react-router-dom'
import relatedPostsArray, {
  getRelatedPostsObject,
  RelatedPosts,
} from 'utils/relatedPostsArray'
import Aside from 'components/Aside/Aside'
import article_content_arcu_image from 'assets/article_content_arcu_image.jpg'
import article_content_rutrum_decor from 'assets/article_content_rutrum_decor.svg'
import rutrum_image1 from 'assets/rutrum_image1.jpg'
import rutrum_image2 from 'assets/rutrum_image2.jpg'
import rutrum_image3 from 'assets/rutrum_image3.jpg'
import rutrum_image4 from 'assets/rutrum_image4.jpg'
import article_content_elementum from 'assets/article_content_elementum.jpg'
import elementum_description_list_item_decor from 'assets/elementum_description_list_item_decor.svg'
import mystories_circle from 'assets/mystories_circle.svg'
import icon_facebook from 'assets/icon_facebook.svg'
import icon_twitter from 'assets/icon_twitter.svg'
import icon_linkedin from 'assets/icon_linkedin.svg'
import icon_pinterest from 'assets/icon_pinterest.svg'
import aside_aboutme from 'assets/aside_aboutme.svg'
import { Link } from 'react-router-dom'
import './ArticlePage.scss'

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
    <section className="article">
      <section className="article-banner">
        <img className="article-banner-image" src={article.image}></img>
        <div className="article-banner-wrapper">
          <div className="article-banner-content">
            <h1 className="article-banner-content-title">{article.title}</h1>
            <div className="article-banner-content-description">
              <a className="article-banner-content-description-link" href="">
                <img
                  className="article-banner-content-description-link-icon"
                  src={article.adminIcon}
                  alt=""
                />
                <span className="article-banner-content-description-link-information">
                  {article.adminInformation}
                </span>
              </a>
              <a className="article-banner-content-description-link" href="">
                <img
                  className="article-banner-content-description-link-icon"
                  src={article.dateIcon}
                  alt=""
                />
                <span className="article-banner-content-description-link-information">
                  {article.date}
                </span>
              </a>
              <a className="article-banner-content-description-link" href="">
                <img
                  className="article-banner-content-description-link-icon"
                  src={article.categoriesIcon}
                  alt=""
                />
                <span className="article-banner-content-description-link-information">
                  {article.category.name}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="article-container">
        <div className="article-content">
          <section className="article-content-arcu">
            <h2 className="article-content-arcu-title">
              Arcu eget vitae arcu massa cras eu turpis. Pellentesque
            </h2>
            <h3 className="article-content-arcu-description">
              Mi quam fermentum purus sit. Est semper tristique vitae, donec
              lorem interdum sagittis quis. Gravida pharetra convallis nunc, at
              tempus morbi sapien aliquam proin.
            </h3>
            <p className="article-content-arcu-information">
              Urna dapibus primis nulla dictumst tortor ligula ligula id egestas
              diam molestie facilisis nam varius consequat habitant feugiat
              litora himenaeos habitasse class curae aenean orci odio aenean.
            </p>
            <p className="article-content-arcu-information">
              Euismod consectetur ipsum sed hendrerit condimentum vestibulum
              iaculis eu netus nunc platea ad habitasse faucibus dictum dui
              phasellus aliquam varius mauris blandit tempus curabitur feugiat
              non nam aptent aliquam ornare laoreet posuere commodo congue
              praesent iaculis fringilla.
            </p>
            <img
              className="article-content-arcu-image"
              src={article_content_arcu_image}
              alt=""
            />
          </section>
          <section className="article-content-rutrum">
            <img
              className="article-content-rutrum-decor"
              src={article_content_rutrum_decor}
              alt=""
            />
            <h2 className="article-content-rutrum-title">
              Rutrum eu etiam curae congue nulla nec etiam non tempor himenaeos
              dictum...
            </h2>
            <p className="article-content-rutrum-information">
              Porta mauris facilisis dapibus purus habitant scelerisque non
              viverra porttitor leo ultrices tortor libero tristique fames
              porttitor metus sem lobortis massa congue pharetra amet semper
              feugiat.
            </p>
            <p className="article-content-rutrum-information">
              Bibendum luctus molestie eu conubia nulla porttitor ut mattis leo
              platea dapibus phasellus luctus tempus tempor potenti neque
              hendrerit risus donec porta etiam est varius felis morbi primis
              eros dictumst lorem mattis imperdiet ut taciti rhoncus dolor nulla
              feugiat neque sem ultrices himenaeos fames aliquet eleifend
              fringilla.
            </p>
            <ul className="article-content-rutrum-list">
              <li className="article-content-rutrum-list-item">
                <img
                  className="article-content-rutrum-list-item-image"
                  src={rutrum_image1}
                  alt=""
                />
              </li>
              <li className="article-content-rutrum-list-item">
                <img
                  className="article-content-rutrum-list-item-image"
                  src={rutrum_image2}
                  alt=""
                />
              </li>
              <li className="article-content-rutrum-list-item">
                <img
                  className="article-content-rutrum-list-item-image"
                  src={rutrum_image3}
                  alt=""
                />
              </li>
              <li className="article-content-rutrum-list-item">
                <img
                  className="article-content-rutrum-list-item-image"
                  src={rutrum_image4}
                  alt=""
                />
              </li>
            </ul>
            <div className="article-content-rutrum-wrapper">
              <table className="article-content-rutrum-table">
                <thead>
                  <tr>
                    <th className="article-content-rutrum-table-title article-content-rutrum-table-decor">
                      Item
                    </th>
                    <th className="article-content-rutrum-table-title article-content-rutrum-table-decor">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="article-content-rutrum-table-information article-content-rutrum-table-decor">
                      Shoes
                    </td>
                    <td className="article-content-rutrum-table-information article-content-rutrum-table-decor">
                      $149
                    </td>
                  </tr>
                  <tr>
                    <td className="article-content-rutrum-table-information article-content-rutrum-table-decor">
                      Pants
                    </td>
                    <td className="article-content-rutrum-table-information article-content-rutrum-table-decor">
                      $199
                    </td>
                  </tr>
                  <tr>
                    <td className="article-content-rutrum-table-information article-content-rutrum-table-decor">
                      Jacket
                    </td>
                    <td className="article-content-rutrum-table-information article-content-rutrum-table-decor">
                      $320
                    </td>
                  </tr>
                  <tr>
                    <td className="article-content-rutrum-table-information">
                      Sweater
                    </td>
                    <td className="article-content-rutrum-table-information">
                      $59
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="article-content-rutrum-information">
              Donec taciti ac adipiscing facilisis amet condimentum in himenaeos
              commodo fringilla donec porta condimentum et in fusce dapibus
              primis facilisis.
            </p>
            <p className="article-content-rutrum-information">
              Pellentesque velit primis hendrerit sapien ut vehicula commodo
              adipiscing pellentesque tempus massa sagittis facilisis bibendum
              rutrum tempus hac quisque nullam blandit orci tempus maecenas
              interdum diam sollicitudin vitae scelerisque nostra turpis.
            </p>
          </section>
          <section className="article-content-elementum">
            <img
              className="article-content-elementum-image"
              src={article_content_elementum}
              alt=""
            />
            <h3 className="article-content-elementum-title">
              Diam elementum dignissim id faucibus et libero blandit bibendum
              ac:
            </h3>
            <div className="article-content-elementum-description">
              <ul className="article-content-elementum-description-list">
                <li className="article-content-elementum-description-list-item">
                  <img
                    className="article-content-elementum-description-list-item-decor"
                    src={elementum_description_list_item_decor}
                    alt=""
                  />
                  <p className="article-content-elementum-description-list-item-information">
                    Sed nulla vestibulum sit sed hendrerit sed dictumst
                    bibendum.
                  </p>
                </li>
                <li className="article-content-elementum-description-list-item">
                  <img
                    className="article-content-elementum-description-list-item-decor"
                    src={elementum_description_list_item_decor}
                    alt=""
                  />
                  <p className="article-content-elementum-description-list-item-information">
                    Enim aenean libero suscipit.
                  </p>
                </li>
                <li className="article-content-elementum-description-list-item">
                  <img
                    className="article-content-elementum-description-list-item-decor"
                    src={elementum_description_list_item_decor}
                    alt=""
                  />
                  <p className="article-content-elementum-description-list-item-information">
                    Leo erat etiam tristique id donec lacus mauris nunc.
                  </p>
                </li>
                <li className="article-content-elementum-description-list-item">
                  <img
                    className="article-content-elementum-description-list-item-decor"
                    src={elementum_description_list_item_decor}
                    alt=""
                  />
                  <p className="article-content-elementum-description-list-item-information">
                    Risus eget nec cursus.
                  </p>
                </li>
              </ul>
              <ul className="article-content-elementum-description-list">
                <li className="article-content-elementum-description-list-item">
                  <img
                    className="article-content-elementum-description-list-item-decor"
                    src={elementum_description_list_item_decor}
                    alt=""
                  />
                  <p className="article-content-elementum-description-list-item-information">
                    Sed nulla vestibulum sit sed hendrerit sed dictumst
                    bibendum.
                  </p>
                </li>
                <li className="article-content-elementum-description-list-item">
                  <img
                    className="article-content-elementum-description-list-item-decor"
                    src={elementum_description_list_item_decor}
                    alt=""
                  />
                  <p className="article-content-elementum-description-list-item-information">
                    Enim aenean libero suscipit.
                  </p>
                </li>
                <li className="article-content-elementum-description-list-item">
                  <img
                    className="article-content-elementum-description-list-item-decor"
                    src={elementum_description_list_item_decor}
                    alt=""
                  />
                  <p className="article-content-elementum-description-list-item-information">
                    Leo erat etiam tristique id donec lacus mauris nunc.
                  </p>
                </li>
                <li className="article-content-elementum-description-list-item">
                  <img
                    className="article-content-elementum-description-list-item-decor"
                    src={elementum_description_list_item_decor}
                    alt=""
                  />
                  <p className="article-content-elementum-description-list-item-information">
                    Risus eget nec cursus.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className="article-content-share">
            <div className="article-content-share-wrapper">
              <div className="article-content-share-logo">
                <img src={mystories_circle} alt="" />
                <span className="article-content-share-logo-description">
                  SHARE ARTICLE
                </span>
              </div>
              <div className="article-content-share-list">
                <span className="article-content-share-list-title">Share:</span>
                <a className="article-content-share-list-link" href="">
                  <img
                    className="article-content-share-list-link-image"
                    src={icon_facebook}
                    alt=""
                  />
                </a>
                <a className="article-content-share-list-link" href="">
                  <img
                    className="article-content-share-list-link-image"
                    src={icon_twitter}
                    alt=""
                  />
                </a>
                <a className="article-content-share-list-link" href="">
                  <img
                    className="article-content-share-list-link-image"
                    src={icon_linkedin}
                    alt=""
                  />
                </a>
                <a className="article-content-share-list-link" href="">
                  <img
                    className="article-content-share-list-link-image"
                    src={icon_pinterest}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="article-content-share-container">
              <img
                className="article-content-share-container-image"
                src={aside_aboutme}
                alt=""
              />
              <div className="article-content-share-container-description">
                <h2 className="article-content-share-container-description-title">
                  Darlene Robertson
                </h2>
                <p className="article-content-share-container-description-information">
                  Cursus venenatis arcu in quis ac. Faucibus cras arcu consequat
                  sed eget lorem. Diam sagittis arcu vitae gravida. Molestie ut
                  amet in tincidunt at elit ac, dignissim sagittis.
                </p>
              </div>
            </div>
          </section>
          <section className="article-content-see">
            <h2 className="article-content-see-title">See also</h2>
            <ul className="article-content-see-list">
              {relatedPostsArray.slice(0, 2).map((el) => (
                <li key={el.id} className="article-content-see-list-item">
                  <img
                    className="article-content-see-list-item-image"
                    src={el.image}
                    alt=""
                  />
                  <div className="article-content-see-list-item-description">
                    <div className="article-content-see-list-item-description-wrapper">
                      <a
                        className="article-content-see-list-item-description-admin"
                        href="/"
                      >
                        <img
                          className="article-content-see-list-item-description-admin-icon"
                          src={el.adminIcon}
                          alt=""
                        />
                        <span className="article-content-see-list-item-description-admin-information">
                          {el.adminInformation}
                        </span>
                      </a>
                      <a
                        className="article-content-see-list-item-description-date"
                        href="/"
                      >
                        <img
                          className="article-content-see-list-item-description-date-icon"
                          src={el.dateIcon}
                          alt=""
                        />
                        <span className="article-content-see-list-item-description-date-information">
                          {el.date}
                        </span>
                      </a>
                    </div>
                    <h2>
                      <Link
                        className="article-content-see-list-item-description-title"
                        to={`/articles/${el.id}`}
                      >
                        {el.title}
                      </Link>
                    </h2>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <Aside />
      </div>
    </section>
  )
}

export default ArticlePage

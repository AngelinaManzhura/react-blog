import mystories_circle from 'assets/mystories_circle.svg'
import icon_facebook from 'assets/icon_facebook.svg'
import icon_twitter from 'assets/icon_twitter.svg'
import icon_linkedin from 'assets/icon_linkedin.svg'
import icon_pinterest from 'assets/icon_pinterest.svg'
import aside_aboutme from 'assets/aside_aboutme.svg'
import './ArticleShare.scss'

type Props = {}

const ArticleShare = (props: Props) => {
  return (
    <section className="share">
      <div className="share-wrapper">
        <div className="share-logo">
          <img src={mystories_circle} alt="" />
          <span className="share-logo-description">SHARE ARTICLE</span>
        </div>
        <div className="share-list">
          <span className="share-list-title">Share:</span>
          <a className="share-list-link" href="https://www.facebook.com/">
            <img className="share-list-link-image" src={icon_facebook} alt="" />
          </a>
          <a className="share-list-link" href="https://twitter.com/">
            <img className="share-list-link-image" src={icon_twitter} alt="" />
          </a>
          <a className="share-list-link" href="https://www.linkedin.com/">
            <img className="share-list-link-image" src={icon_linkedin} alt="" />
          </a>
          <a className="share-list-link" href="https://www.pinterest.com/">
            <img
              className="share-list-link-image"
              src={icon_pinterest}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="share-container">
        <img className="share-container-image" src={aside_aboutme} alt="" />
        <div className="share-container-description">
          <h2 className="share-container-description-title">
            Darlene Robertson
          </h2>
          <p className="share-container-description-information">
            Cursus venenatis arcu in quis ac. Faucibus cras arcu consequat sed
            eget lorem. Diam sagittis arcu vitae gravida. Molestie ut amet in
            tincidunt at elit ac, dignissim sagittis.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ArticleShare

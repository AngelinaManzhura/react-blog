import aside_aboutme from 'assets/aside_aboutme.svg'
import aside_quote from 'assets/aside_quote.svg'
import aside_decoration from 'assets/aside_decoration.svg'
import aside_instagram1 from 'assets/aside_instagram1.svg'
import aside_instagram2 from 'assets/aside_instagram2.svg'
import aside_instagram3 from 'assets/aside_instagram3.svg'
import aside_instagram4 from 'assets/aside_instagram4.svg'
import aside_instagram5 from 'assets/aside_instagram5.svg'
import aside_instagram6 from 'assets/aside_instagram6.svg'
import './Aside.scss'

type Props = {}

const Aside = (props: Props) => {
  return (
    <aside className="aside">
      <div className="aside-container">
        <div className="aside-content">
          <div className="aside-content-aboutme">
            <h3 className="aside-content-aboutme-title">ABOUT ME</h3>
            <img
              className="aside-content-aboutme-image"
              src={aside_aboutme}
              alt=""
            />
            <div className="aside-content-aboutme-quote">
              <img
                className="aside-content-aboutme-quote-image"
                src={aside_quote}
                alt=""
              />
              <p className="aside-content-aboutme-quote-description">
                Diam in aliquam quam congue. Faucibus maecenas malesuada arcu
                ipsum lorem nunc egestas in. Eu varius et enim gravida id.
              </p>
            </div>
            <img
              className="aside-content-aboutme-decoration"
              src={aside_decoration}
              alt=""
            />
          </div>
          <div className="aside-content-categories">
            <h3 className="aside-content-categories-title">CATEGORIES</h3>
            <ul className="aside-content-categories-list">
              <li className="aside-content-categories-list-item">
                <a className="aside-content-categories-list-item-link" href="/">
                  Fashion
                </a>
              </li>
              <li className="aside-content-categories-list-item">
                <a className="aside-content-categories-list-item-link" href="/">
                  Lifestyle
                </a>
              </li>
              <li className="aside-content-categories-list-item">
                <a className="aside-content-categories-list-item-link" href="/">
                  Pinned
                </a>
              </li>
              <li className="aside-content-categories-list-item">
                <a className="aside-content-categories-list-item-link" href="/">
                  Travel
                </a>
              </li>
            </ul>
            <img
              className="aside-content-categories-decoration"
              src={aside_decoration}
              alt=""
            />
          </div>
          <div className="aside-content-instagram">
            <h3 className="aside-content-instagram-title">INSTAGRAM</h3>
            <ul className="aside-content-instagram-list">
              <li className="aside-content-instagram-list-item">
                <img
                  className="aside-content-instagram-list-item-image"
                  src={aside_instagram1}
                  alt=""
                />
              </li>
              <li className="aside-content-instagram-list-item">
                <img
                  className="aside-content-instagram-list-item-image"
                  src={aside_instagram2}
                  alt=""
                />
              </li>
              <li className="aside-content-instagram-list-item">
                <img
                  className="aside-content-instagram-list-item-image"
                  src={aside_instagram3}
                  alt=""
                />
              </li>
              <li className="aside-content-instagram-list-item">
                <img
                  className="aside-content-instagram-list-item-image"
                  src={aside_instagram4}
                  alt=""
                />
              </li>
              <li className="aside-content-instagram-list-item">
                <img
                  className="aside-content-instagram-list-item-image"
                  src={aside_instagram5}
                  alt=""
                />
              </li>
              <li className="aside-content-instagram-list-item">
                <img
                  className="aside-content-instagram-list-item-image"
                  src={aside_instagram6}
                  alt=""
                />
              </li>
            </ul>
            <img
              className="aside-content-categories-decoration"
              src={aside_decoration}
              alt=""
            />
          </div>
          <div className="aside-content-newsletter">
            <h3 className="aside-content-newsletter-title">NEWSLETTER</h3>
            <input
              className="aside-content-newsletter-email"
              typeof="email"
              placeholder="your mail"
            />
            <button className="aside-content-newsletter-button" type="submit">
              SEND
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Aside

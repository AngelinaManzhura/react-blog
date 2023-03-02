import Logo from 'components/Logo/Logo'
import './Footer.scss'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-content-wrapper">
            <ul className="footer-content-list">
              <li className="footer-content-list-item">
                <a className="footer-content-list-item-link" href="">
                  ACCESSIBILITY
                </a>
              </li>
              <li className="footer-content-list-item">
                <a className="footer-content-list-item-link" href="">
                  COMMENT
                </a>
              </li>
              <li className="footer-content-list-item">
                <a className="footer-content-list-item-link" href="">
                  PHOTO
                </a>
              </li>
            </ul>
            <Logo />
            <ul className="footer-content-list">
              <li className="footer-content-list-item">
                <a className="footer-content-list-item-link" href="">
                  PRIVACY
                </a>
              </li>
              <li className="footer-content-list-item">
                <a className="footer-content-list-item-link" href="">
                  TERMS
                </a>
              </li>
              <li className="footer-content-list-item">
                <a className="footer-content-list-item-link" href="">
                  DESIGNED BY
                </a>
              </li>
            </ul>
          </div>
          <p className="footer-content-information">
            © 2023 Betheme by Muffin group | All Rights Reserved | Powered by
            WordPress
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

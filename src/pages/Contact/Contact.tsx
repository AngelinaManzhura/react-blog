import related_posts_circle from 'assets/related_posts_circle.svg'
import contact_circle from 'assets/contact_circle.svg'
import contact_banner from 'assets/contact_banner.jpeg'
import partnership_porttitor_circle from 'assets/partnership_porttitor_circle.svg'
import './Contact.scss'
import Viverra from 'pages/AboutMe/Viverra/Viverra'
import Work from 'pages/Partnership/Work/Work'
import MyStories from 'pages/Home/MyStories/MyStories'

type Props = {}

const Contact = (props: Props) => {
  return (
    <main className="contact">
      <section className="blog-banner">
        <img className="blog-banner-image" src={contact_banner} alt="" />
        <div className="blog-banner-content">
          <div className="blog-banner-content-logo">
            <img src={related_posts_circle} alt="" />
            <span className="blog-banner-content-logo-description">BEBLOG</span>
          </div>
          <h1 className="blog-banner-content-title">Contact</h1>
        </div>
      </section>
      <section className="contact-connection">
        <div className="contact-connection-content">
          <p className="contact-connection-questions">
            Do you have any questions? <span>Contact me!</span>
          </p>
          <img
            className="contact-connection-image"
            src={contact_circle}
            alt=""
          />
          <a className="contact-connection-tel" href="tel: +61 (0) 3 8376 6284">
            +61 (0) 3 8376 6284
          </a>
          <a
            className="contact-connection-mail"
            href="mailto: noreply@envato.com"
          >
            noreply@envato.com
          </a>
          <address className="contact-connection-address">
            Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia
          </address>
        </div>
      </section>
      <section className="contact-write">
        <div className="contact-write-content">
          <div className="contact-write-curabitur">
            <div className="porttitor-logo">
              <img src={partnership_porttitor_circle} alt="" />
              <span className="porttitor-logo-description">FOLLOW ME</span>
            </div>
            <h2 className="contact-write-curabitur-title">
              Curabitur nibh porttitor in et.
            </h2>
            <p className="contact-write-curabitur-description">
              Condimentum curabitur commodo eleifend viverra dui lectus
              himenaeos porta egestas senectus proin egestas condimentum
              facilisis aptent faucibus platea mattis himenaeos pellentesque
              congue nullam cras.
            </p>
            <ul className="contact-write-curabitur-list">
              <li className="contact-write-curabitur-list-item">
                <input
                  className="contact-write-curabitur-list-item-checkbox"
                  type="checkbox"
                />
                Aliquam egestas orci ad volutpat enim ut erat.
              </li>
              <li className="contact-write-curabitur-list-item">
                <input
                  className="contact-write-curabitur-list-item-checkbox"
                  type="checkbox"
                />
                Bibendum sodales porta semper consectetur.
              </li>
              <li className="contact-write-curabitur-list-item">
                <input
                  className="contact-write-curabitur-list-item-checkbox"
                  type="checkbox"
                />
                Aenean molestie euismod in curae proin.
              </li>
            </ul>
          </div>
          <form className="contact-write-form">
            <h2 className="contact-write-form-title">
              Have a question? Write to us!
            </h2>
            <input
              className="contact-write-form-information"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="contact-write-form-information"
              type="text"
              placeholder="Phone"
            />
            <input
              className="contact-write-form-information"
              type="text"
              placeholder="Email address"
            />
            <input
              className="contact-write-form-information"
              type="text"
              placeholder="Your message..."
            />
            <button className="contact-write-form-button" type="submit">
              SEND A MESSAGE
            </button>
          </form>
        </div>
      </section>
      <Viverra />
      <Work />
      <MyStories />
    </main>
  )
}

export default Contact

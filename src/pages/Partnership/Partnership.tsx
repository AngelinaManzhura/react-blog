import related_posts_circle from 'assets/related_posts_circle.svg'
import partnership_banner from 'assets/partnership_banner.webp'
import MyStories from 'pages/Home/MyStories/MyStories'
import Work from './Work/Work'
import Porttitor from './Porttitor/Porttitor'
import Purus from './Purus/Purus'

type Props = {}

const Partnership = (props: Props) => {
  return (
    <main className="partnership">
      <section className="blog-banner">
        <img className="blog-banner-image" src={partnership_banner} alt="" />
        <div className="blog-banner-content">
          <div className="blog-banner-content-logo">
            <img src={related_posts_circle} alt="" />
            <span className="blog-banner-content-logo-description">BEBLOG</span>
          </div>
          <h1 className="blog-banner-content-title">Partnership</h1>
        </div>
      </section>
      <Porttitor />
      <Purus />
      {/* <section className="partnership-trip">
        <div className="partnership-trip-container">
          <div className="partnership-trip-logo">
            <img src={partnership_porttitor_circle} alt="" />
            <span className="partnership-trip-logo-description">BEBLOG</span>
          </div>
          <h2 className="partnership-trip-title">Until the next trip</h2>
          <p className="partnership-trip-description">
            Condimentum malesuada aliquet morbi semper. Tempor bibendum enim
            tincidunt condimentum erat.
          </p>
          <ul className="partnership-trip-list">
            <li className="partnership-trip-list-item">
              <span>00</span>
              <p>days</p>
            </li>
            <li className="partnership-trip-list-item">
              <span>00</span>
              <p>hours</p>
            </li>
            <li className="partnership-trip-list-item">
              <span>00</span>
              <p>minutes</p>
            </li>
            <li className="partnership-trip-list-item">
              <span>00</span>
              <p>seconds</p>
            </li>
          </ul>
          <button type="submit">LAST TRIP</button>
        </div>
      </section> */}
      {/* <section className="partnership-eget">
        <div className="partnership-eget-content"></div>
        <h2 className="partnership-eget-title">
          Eget nunc in a, laoreet egestas.
        </h2>
        <button></button>
      </section> */}
      <Work />
      <MyStories />
    </main>
  )
}

export default Partnership

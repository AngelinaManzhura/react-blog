import related_posts_circle from 'assets/related_posts_circle.svg'
import partnership_porttitor_circle from 'assets/partnership_porttitor_circle.svg'
import partnership_banner from 'assets/partnership_banner.webp'
import purus_image from 'assets/purus_image.svg'
import './Partnership.scss'
import MyStories from 'pages/Home/MyStories/MyStories'

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
      <section className="partnership-porttitor">
        <div className="partnership-porttitor-content">
          <div className="partnership-porttitor-container">
            <div className="partnership-porttitor-logo">
              <img src={partnership_porttitor_circle} alt="" />
              <span className="partnership-porttitor-logo-description">
                PARTNERSHIP
              </span>
            </div>
            <div className="partnership-porttitor-wrapper">
              <h2 className="partnership-porttitor-title">
                In condimentum sed velit, quam non nisl. Porttitor.
              </h2>
              <p className="partnership-porttitor-description">
                Sed facilisis adipiscing egestas sed feugiat et arcu neque.
                Viverra rhoncus ut nunc vitae leo odio tristique velit.
                Vulputate dui dui purus, morbi amet, varius. Non nulla
                ullamcorper suspendisse amet non, dignissim.
              </p>
            </div>
          </div>
          <div className="partnership-porttitor-wrapper partnership-porttitor-decor">
            <p className="partnership-porttitor-questions">
              Do you have any questions? <span>Contact me!</span>
            </p>
            <a
              className="partnership-porttitor-contact"
              href="tel: +61 (0) 3 8376 6284"
            >
              +61 (0) 3 8376 6284
            </a>
          </div>
        </div>
      </section>
      <section className="partnership-purus">
        <div className="partnership-purus-content">
          <div className="partnership-purus-logo">
            <img src={partnership_porttitor_circle} alt="" />
            <span className="partnership-purus-logo-description">
              PARTNERSHIP
            </span>
          </div>
          <div className="partnership-purus-wrapper">
            <div className="partnership-purus-container">
              <h2 className="partnership-purus-title">
                Purus erat vel duis et sit aliquam donec.
              </h2>
              <p className="partnership-purus-description">
                Rutrum et per phasellus quam velit malesuada molestie lectus
                rutrum ipsum quam accumsan pharetra commodo donec risus
                sollicitudin tristique litora sollicitudin donec proin aenean
                facilisis.
              </p>
            </div>

            <img className="partnership-purus-image" src={purus_image} alt="" />
            <button className="partnership-purus-button" type="submit">
              ABOUT ME
            </button>
          </div>
          <ul className="partnership-purus-list">
            <li className="partnership-purus-list-item">
              <div className="partnership-purus-list-item-number">
                <span>01</span>
              </div>
              <h3 className="partnership-purus-list-item-title">
                Proin venenatis
              </h3>
              <p className="partnership-purus-list-item-description">
                Nunc, tempor mauris hendrerit massa enim. Ut.
              </p>
            </li>
            <li className="partnership-purus-list-item">
              <div className="partnership-purus-list-item-number">
                <span>02</span>
              </div>
              <h3 className="partnership-purus-list-item-title">
                Ultrices amet.
              </h3>
              <p className="partnership-purus-list-item-description">
                Velit ut est ultrices orci tristique proin risus.
              </p>
            </li>
            <li className="partnership-purus-list-item">
              <div className="partnership-purus-list-item-number">
                <span>03</span>
              </div>
              <h3 className="partnership-purus-list-item-title">
                Nec eget id.
              </h3>
              <p className="partnership-purus-list-item-description">
                Ipsum tempor bibendum et dictum ultricies massa.
              </p>
            </li>
          </ul>
        </div>
      </section>
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
      <section className="partnership-work">
        <div className="partnership-work-content">
          <div className="partnership-work-logo">
            <img src={partnership_porttitor_circle} alt="" />
            <span className="partnership-work-logo-description">BEBLOG</span>
          </div>
          <h2 className="partnership-work-title">
            Let's start working together
          </h2>
          <p className="partnership-work-description">
            Ornare pharetra est sed vulputate leo fames ultricies. Viverra sed
            a, vitae dui porttitor netus nisi, lacus. Vel lectus.
          </p>
          <button className="partnership-work-button" type="submit">
            CONTACT ME
          </button>
        </div>
      </section>
      <MyStories />
    </main>
  )
}

export default Partnership

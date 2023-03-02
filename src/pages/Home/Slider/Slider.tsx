import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Slider.scss'

import sliderArray from 'utils/sliderArray'

type Props = {}

const SliderSection = (props: Props) => {
  let settings = {
    // autoplay: true,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          centerPadding: '0px',
        },
      },
    ],
  }

  return (
    <section className="slider">
      <div className="slider-container">
        <div className="slider-content">
          <ul className="slider-content-list">
            <Slider {...settings}>
              {sliderArray.map((el) => (
                <li key={el.id} className="slider-content-list-item">
                  <img
                    className="slider-content-list-item-image"
                    src={el.image}
                    alt={el.description}
                  />
                  <p className="slider-content-list-item-description">
                    {el.description}
                  </p>
                </li>
              ))}
            </Slider>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SliderSection

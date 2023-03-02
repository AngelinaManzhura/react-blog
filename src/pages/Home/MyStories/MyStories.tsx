import mystories_circle from 'assets/mystories_circle.svg'
import mystories_image1 from 'assets/mystories_image1.svg'
import mystories_image2 from 'assets/mystories_image2.svg'
import mystories_image3 from 'assets/mystories_image3.svg'
import mystories_image4 from 'assets/mystories_image4.svg'
import mystories_image5 from 'assets/mystories_image5.svg'
import mystories_image6 from 'assets/mystories_image6.svg'
import './MyStories.scss'

type Props = {}

const MyStories = (props: Props) => {
  return (
    <section className="mystories">
      <div className="mystories-content">
        <div className="mystories-content-logo">
          <img src={mystories_circle} alt="" />
          <span className="mystories-content-logo-description">MY STORIES</span>
        </div>
        <ul className="mystories-content-list">
          <li className="mystories-content-list-item">
            <img
              className="mystories-content-list-item-image"
              src={mystories_image1}
              alt=""
            />
          </li>
          <li className="mystories-content-list-item">
            <img
              className="mystories-content-list-item-image"
              src={mystories_image2}
              alt=""
            />
          </li>
          <li className="mystories-content-list-item">
            <img
              className="mystories-content-list-item-image"
              src={mystories_image3}
              alt=""
            />
          </li>
          <li className="mystories-content-list-item">
            <img
              className="mystories-content-list-item-image"
              src={mystories_image4}
              alt=""
            />
          </li>
          <li className="mystories-content-list-item">
            <img
              className="mystories-content-list-item-image"
              src={mystories_image5}
              alt=""
            />
          </li>
          <li className="mystories-content-list-item">
            <img
              className="mystories-content-list-item-image"
              src={mystories_image6}
              alt=""
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default MyStories

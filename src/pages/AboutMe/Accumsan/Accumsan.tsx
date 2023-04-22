import { Link } from 'react-router-dom'
import accumsan_image from 'assets/accumsan_image.svg'
import accumsan_photo from 'assets/accumsan_photo.svg'
import partnership_porttitor_circle from 'assets/partnership_porttitor_circle.svg'
import './Accumsan.scss'

type Props = {}

const Accumsan = (props: Props) => {
  return (
    <section className="accumsan">
      <div className="accumsan-content">
        <div className="accumsan-wrapper">
          <div className="accumsan-logo">
            <img src={partnership_porttitor_circle} alt="" />
            <span className="porttitor-logo-description">ABOUT ME</span>
          </div>
          <h2 className="accumsan-title">Erat sed facilisi accumsan et.</h2>
        </div>
        <div className="accumsan-wrapper">
          <p className="accumsan-description">
            Nec quisque ante nibh malesuada hendrerit molestie facilisis blandit
            turpis est interdum curae massa iaculis volutpat libero erat augue
            tortor dapibus quis bibendum.
          </p>
          <Link to="/contact" reloadDocument={true}>
            <button className="accumsan-button" type="submit">
              CONTACT ME
            </button>
          </Link>
        </div>
        <img className="accumsan-image" src={accumsan_image} alt="" />
      </div>
      <img className="accumsan-photo" src={accumsan_photo} alt="" />
    </section>
  )
}

export default Accumsan

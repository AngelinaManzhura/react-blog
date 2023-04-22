import { Link } from 'react-router-dom'
import partnership_porttitor_circle from 'assets/partnership_porttitor_circle.svg'
import purus_image from 'assets/purus_image.svg'
import './Purus.scss'

type Props = {}

const Purus = (props: Props) => {
  return (
    <section className="purus">
      <div className="purus-content">
        <div className="purus-logo">
          <img src={partnership_porttitor_circle} alt="" />
          <span className="purus-logo-description">PARTNERSHIP</span>
        </div>
        <div className="purus-wrapper">
          <div className="purus-container">
            <h2 className="purus-title">
              Purus erat vel duis et sit aliquam donec.
            </h2>
            <p className="purus-description">
              Rutrum et per phasellus quam velit malesuada molestie lectus
              rutrum ipsum quam accumsan pharetra commodo donec risus
              sollicitudin tristique litora sollicitudin donec proin aenean
              facilisis.
            </p>
          </div>
          <img className="purus-image" src={purus_image} alt="" />
          <Link
            className="purus-aboutme-link"
            to="/aboutme"
            reloadDocument={true}
          >
            <button className="purus-aboutme-link-button" type="submit">
              ABOUT ME
            </button>
          </Link>
        </div>
        <ul className="purus-list">
          <li className="purus-list-item">
            <div className="purus-list-item-number">
              <span>01</span>
            </div>
            <h3 className="purus-list-item-title">Proin venenatis</h3>
            <p className="purus-list-item-description">
              Nunc, tempor mauris hendrerit massa enim. Ut.
            </p>
          </li>
          <li className="purus-list-item">
            <div className="purus-list-item-number">
              <span>02</span>
            </div>
            <h3 className="purus-list-item-title">Ultrices amet.</h3>
            <p className="purus-list-item-description">
              Velit ut est ultrices orci tristique proin risus.
            </p>
          </li>
          <li className="purus-list-item">
            <div className="purus-list-item-number">
              <span>03</span>
            </div>
            <h3 className="purus-list-item-title">Nec eget id.</h3>
            <p className="purus-list-item-description">
              Ipsum tempor bibendum et dictum ultricies massa.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Purus

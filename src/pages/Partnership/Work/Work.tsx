import { Link } from 'react-router-dom'
import partnership_porttitor_circle from 'assets/partnership_porttitor_circle.svg'
import './Work.scss'

type Props = {}

const Work = (props: Props) => {
  return (
    <section className="work">
      <div className="work-content">
        <div className="work-logo">
          <img src={partnership_porttitor_circle} alt="" />
          <span className="work-logo-description">BEBLOG</span>
        </div>
        <h2 className="work-title">Let's start working together</h2>
        <p className="work-description">
          Ornare pharetra est sed vulputate leo fames ultricies. Viverra sed a,
          vitae dui porttitor netus nisi, lacus. Vel lectus.
        </p>
        <Link to="/contact" reloadDocument={true}>
          <button className="work-button" type="submit">
            CONTACT ME
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Work

import partnership_porttitor_circle from 'assets/partnership_porttitor_circle.svg'
import './Viverra.scss'

type Props = {}

const Viverra = (props: Props) => {
  return (
    <section className="viverra">
      <div className="viverra-content">
        <div className="viverra-logo">
          <img src={partnership_porttitor_circle} alt="" />
          <span className="porttitor-logo-description">FOLLOW ME</span>
        </div>
        <div className="viverra-wrapper">
          <h2 className="viverra-title">
            Viverra blandit vulputate pellentesque sed. Nulla.
          </h2>
          <button className="viverra-button" type="submit">
            FOLLOW ME ON INSTAGRAM
          </button>
        </div>
      </div>
    </section>
  )
}

export default Viverra

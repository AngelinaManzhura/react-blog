import partnership_porttitor_circle from 'assets/partnership_porttitor_circle.svg'
import './Porttitor.scss'

type Props = {}

const Porttitor = (props: Props) => {
  return (
    <section className="porttitor">
      <div className="porttitor-content">
        <div className="porttitor-container">
          <div className="porttitor-logo">
            <img src={partnership_porttitor_circle} alt="" />
            <span className="porttitor-logo-description">PARTNERSHIP</span>
          </div>
          <div className="porttitor-wrapper">
            <h2 className="porttitor-title">
              In condimentum sed velit, quam non nisl. Porttitor.
            </h2>
            <p className="porttitor-description">
              Sed facilisis adipiscing egestas sed feugiat et arcu neque.
              Viverra rhoncus ut nunc vitae leo odio tristique velit. Vulputate
              dui dui purus, morbi amet, varius. Non nulla ullamcorper
              suspendisse amet non, dignissim.
            </p>
          </div>
        </div>
        <div className="porttitor-wrapper porttitor-decor">
          <p className="porttitor-questions">
            Do you have any questions? <span>Contact me!</span>
          </p>
          <a className="porttitor-contact" href="tel: +61 (0) 3 8376 6284">
            +61 (0) 3 8376 6284
          </a>
        </div>
      </div>
    </section>
  )
}

export default Porttitor

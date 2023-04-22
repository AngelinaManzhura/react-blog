import { Link } from 'react-router-dom'
import partnership_porttitor_circle from 'assets/partnership_porttitor_circle.svg'
import about_people_image from 'assets/about_people_image.png'
import './People.scss'

type Props = {}

const People = (props: Props) => {
  return (
    <section className="people">
      <div className="people-content">
        <div className="people-container">
          <div className="people-logo">
            <img src={partnership_porttitor_circle} alt="" />
            <span className="porttitor-logo-description">ABOUT ME</span>
          </div>
          <h2 className="people-title">
            People say that i'm an interesting person
          </h2>
          <p className="people-description">
            Fringilla himenaeos in sagittis ac orci ipsum per eget arcu enim
            ornare dictumst sollicitudin amet pulvinar laoreet velit mauris
            eleifend nulla duis primis rutrum justo nisi litora platea orci
            lorem ornare leo praesent arcu congue.
          </p>
          <p className="people-description">
            Tellus platea magna sed est sodales ornare bibendum elit dui fusce
            arcu non sollicitudin erat lacus posuere pulvinar odio augue
            fermentum odio taciti erat primis curabitur vehicula ornare non
            sociosqu ad nostra varius dapibus nullam.
          </p>
          <Link to="/blog" reloadDocument={true}>
            <button className="people-button" type="submit">
              CHECK MY BLOG
            </button>
          </Link>
        </div>
        <div className="people-wrapper">
          <img className="people-image" src={about_people_image} alt="" />
          <p className="people-information">
            Feugiat consequat placerat nullam eget netus donec praesent eu
            conubia adipiscing vitae gravida varius gravida consequat.
          </p>
        </div>
      </div>
    </section>
  )
}

export default People

import { Link } from 'react-router-dom'
import about_number_image from 'assets/about_number_image.png'
import partnership_porttitor_circle from 'assets/partnership_porttitor_circle.svg'
import './Number.scss'

type Props = {}

const Number = (props: Props) => {
  return (
    <section className="number">
      <div className="number-content">
        <img className="number-image" src={about_number_image} alt="" />
        <div className="number-wrapper">
          <div className="number-logo">
            <img src={partnership_porttitor_circle} alt="" />
            <span className="porttitor-logo-description">ABOUT ME</span>
          </div>
          <h2 className="number-title">
            Stay here for a while and check the numbers.
          </h2>
          <table className="number-table">
            <tr>
              <td className="number-table-decor number-table-quantity">35</td>
              <td className="number-table-decor number-table-information">
                Pellentesque habitant morbi tristique purus. Praesent sit amet.
              </td>
            </tr>
            <tr>
              <td className="number-table-decor number-table-quantity">52</td>
              <td className="number-table-decor number-table-information">
                Aliquam ultricies vitae, vulputate eget, aliquet eget, pede.
              </td>
            </tr>
            <tr>
              <td className="number-table-quantity">31</td>
              <td className="number-table-information">
                Ut elit lectus felis tincidunt risus sit amet, massa.
              </td>
            </tr>
          </table>
          <Link to="/contact" reloadDocument={true}>
            <button className="number-button" type="submit">
              CONTACT ME
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Number

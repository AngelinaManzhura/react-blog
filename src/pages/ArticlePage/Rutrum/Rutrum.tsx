import article_content_rutrum_decor from 'assets/article_content_rutrum_decor.svg'
import rutrum_image1 from 'assets/rutrum_image1.jpg'
import rutrum_image2 from 'assets/rutrum_image2.jpg'
import rutrum_image3 from 'assets/rutrum_image3.jpg'
import rutrum_image4 from 'assets/rutrum_image4.jpg'
import './Rutrum.scss'

type Props = {}

const Rutrum = (props: Props) => {
  return (
    <section className="rutrum">
      <img className="rutrum-decor" src={article_content_rutrum_decor} alt="" />
      <h2 className="rutrum-title">
        Rutrum eu etiam curae congue nulla nec etiam non tempor himenaeos
        dictum...
      </h2>
      <p className="rutrum-information">
        Porta mauris facilisis dapibus purus habitant scelerisque non viverra
        porttitor leo ultrices tortor libero tristique fames porttitor metus sem
        lobortis massa congue pharetra amet semper feugiat.
      </p>
      <p className="rutrum-information">
        Bibendum luctus molestie eu conubia nulla porttitor ut mattis leo platea
        dapibus phasellus luctus tempus tempor potenti neque hendrerit risus
        donec porta etiam est varius felis morbi primis eros dictumst lorem
        mattis imperdiet ut taciti rhoncus dolor nulla feugiat neque sem
        ultrices himenaeos fames aliquet eleifend fringilla.
      </p>
      <ul className="rutrum-list">
        <li className="rutrum-list-item">
          <img className="rutrum-list-item-image" src={rutrum_image1} alt="" />
        </li>
        <li className="rutrum-list-item">
          <img className="rutrum-list-item-image" src={rutrum_image2} alt="" />
        </li>
        <li className="rutrum-list-item">
          <img className="rutrum-list-item-image" src={rutrum_image3} alt="" />
        </li>
        <li className="rutrum-list-item">
          <img className="rutrum-list-item-image" src={rutrum_image4} alt="" />
        </li>
      </ul>
      <div className="rutrum-wrapper">
        <table className="rutrum-table">
          <thead>
            <tr>
              <th className="rutrum-table-title rutrum-table-decor">Item</th>
              <th className="rutrum-table-title rutrum-table-decor">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="rutrum-table-information rutrum-table-decor">
                Shoes
              </td>
              <td className="rutrum-table-information rutrum-table-decor">
                $149
              </td>
            </tr>
            <tr>
              <td className="rutrum-table-information rutrum-table-decor">
                Pants
              </td>
              <td className="rutrum-table-information rutrum-table-decor">
                $199
              </td>
            </tr>
            <tr>
              <td className="rutrum-table-information rutrum-table-decor">
                Jacket
              </td>
              <td className="rutrum-table-information rutrum-table-decor">
                $320
              </td>
            </tr>
            <tr>
              <td className="rutrum-table-information">Sweater</td>
              <td className="rutrum-table-information">$59</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="rutrum-information">
        Donec taciti ac adipiscing facilisis amet condimentum in himenaeos
        commodo fringilla donec porta condimentum et in fusce dapibus primis
        facilisis.
      </p>
      <p className="rutrum-information">
        Pellentesque velit primis hendrerit sapien ut vehicula commodo
        adipiscing pellentesque tempus massa sagittis facilisis bibendum rutrum
        tempus hac quisque nullam blandit orci tempus maecenas interdum diam
        sollicitudin vitae scelerisque nostra turpis.
      </p>
    </section>
  )
}

export default Rutrum

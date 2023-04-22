import article_content_arcu_image from 'assets/article_content_arcu_image.jpg'
import './Arcu.scss'

type Props = {}

const Arcu = (props: Props) => {
  return (
    <section className="arcu">
      <h2 className="arcu-title">
        Arcu eget vitae arcu massa cras eu turpis. Pellentesque
      </h2>
      <h3 className="arcu-description">
        Mi quam fermentum purus sit. Est semper tristique vitae, donec lorem
        interdum sagittis quis. Gravida pharetra convallis nunc, at tempus morbi
        sapien aliquam proin.
      </h3>
      <p className="arcu-information">
        Urna dapibus primis nulla dictumst tortor ligula ligula id egestas diam
        molestie facilisis nam varius consequat habitant feugiat litora
        himenaeos habitasse class curae aenean orci odio aenean.
      </p>
      <p className="arcu-information">
        Euismod consectetur ipsum sed hendrerit condimentum vestibulum iaculis
        eu netus nunc platea ad habitasse faucibus dictum dui phasellus aliquam
        varius mauris blandit tempus curabitur feugiat non nam aptent aliquam
        ornare laoreet posuere commodo congue praesent iaculis fringilla.
      </p>
      <img className="arcu-image" src={article_content_arcu_image} alt="" />
    </section>
  )
}

export default Arcu

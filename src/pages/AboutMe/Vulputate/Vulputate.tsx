import vulputate_fashion_posts from 'assets/vulputate_fashion_posts.svg'
import vulputate_world_tours from 'assets/vulputate_world_tours.svg'
import vulputate_lifestyle_advices from 'assets/vulputate_lifestyle_advices.svg'
import vulputate_beauty_posts from 'assets/vulputate_beauty_posts.svg'
import './Vulputate.scss'

type Props = {}

const Vulputate = (props: Props) => {
  return (
    <section className="vulputate">
      <div className="vulputate-content">
        <h2 className="vulputate-title">
          Vulputate mauris non mauris sed vulputate venenatis.
        </h2>
        <ul className="vulputate-list">
          <li className="vulputate-list-item">
            <img src={vulputate_fashion_posts} alt="" />
            <p className="vulputate-list-item-quantity">152</p>
            <p className="vulputate-list-item-description">Fashion posts</p>
          </li>
          <li className="vulputate-list-item">
            <img src={vulputate_world_tours} alt="" />
            <p className="vulputate-list-item-quantity">968</p>
            <p className="vulputate-list-item-description">World tours</p>
          </li>
          <li className="vulputate-list-item">
            <img src={vulputate_lifestyle_advices} alt="" />
            <p className="vulputate-list-item-quantity">122</p>
            <p className="vulputate-list-item-description">Lifestyle advices</p>
          </li>
          <li className="vulputate-list-item">
            <img src={vulputate_beauty_posts} alt="" />
            <p className="vulputate-list-item-quantity">720</p>
            <p className="vulputate-list-item-description">Beauty posts</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Vulputate

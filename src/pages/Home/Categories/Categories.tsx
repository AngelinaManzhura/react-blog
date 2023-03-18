import categoriesArray from 'utils/categoriesArray'
import { NavLink } from 'react-router-dom'
import './Categories.scss'

type Props = {}

const Categories = (props: Props) => {
  return (
    <section className="categories">
      <div className="categories-container">
        <div className="categories-content">
          <ul className="categories-content-list">
            {categoriesArray.map((el) => (
              <li key={el.id} className="categories-content-list-item">
                <img
                  className="categories-content-list-item-image"
                  src={el.image}
                  alt={el.description}
                />
                <div className="categories-content-list-item-description">
                  <NavLink
                    to={el.path}
                    className="categories-content-list-item-description-link"
                  >
                    {el.description}
                  </NavLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Categories

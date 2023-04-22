import relatedPostsArray from 'utils/relatedPostsArray'
import { Link } from 'react-router-dom'
import './See.scss'

type Props = {}

const See = (props: Props) => {
  return (
    <section className="see">
      <h2 className="see-title">See also</h2>
      <ul className="see-list">
        {relatedPostsArray.slice(0, 2).map((el) => (
          <li key={el.id} className="see-list-item">
            <img className="see-list-item-image" src={el.image} alt="" />
            <div className="see-list-item-description">
              <div className="see-list-item-description-wrapper">
                <a className="see-list-item-description-admin" href="/">
                  <img
                    className="see-list-item-description-admin-icon"
                    src={el.adminIcon}
                    alt=""
                  />
                  <span className="see-list-item-description-admin-information">
                    {el.adminInformation}
                  </span>
                </a>
                <a className="see-list-item-description-date" href="/">
                  <img
                    className="see-list-item-description-date-icon"
                    src={el.dateIcon}
                    alt=""
                  />
                  <span className="see-list-item-description-date-information">
                    {el.date}
                  </span>
                </a>
              </div>
              <h2>
                <Link
                  className="see-list-item-description-title"
                  to={`/articles/${el.id}`}
                  reloadDocument={true}
                >
                  {el.title}
                </Link>
              </h2>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default See

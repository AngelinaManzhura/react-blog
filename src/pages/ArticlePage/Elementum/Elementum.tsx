import article_content_elementum from 'assets/article_content_elementum.jpg'
import elementum_description_list_item_decor from 'assets/elementum_description_list_item_decor.svg'
import './Elementum.scss'

type Props = {}

const Elementum = (props: Props) => {
  return (
    <section className="elementum">
      <img className="elementum-image" src={article_content_elementum} alt="" />
      <h3 className="elementum-title">
        Diam elementum dignissim id faucibus et libero blandit bibendum ac:
      </h3>
      <div className="elementum-description">
        <ul className="elementum-description-list">
          <li className="elementum-description-list-item">
            <img
              className="elementum-description-list-item-decor"
              src={elementum_description_list_item_decor}
              alt=""
            />
            <p className="elementum-description-list-item-information">
              Sed nulla vestibulum sit sed hendrerit sed dictumst bibendum.
            </p>
          </li>
          <li className="elementum-description-list-item">
            <img
              className="elementum-description-list-item-decor"
              src={elementum_description_list_item_decor}
              alt=""
            />
            <p className="elementum-description-list-item-information">
              Enim aenean libero suscipit.
            </p>
          </li>
          <li className="elementum-description-list-item">
            <img
              className="elementum-description-list-item-decor"
              src={elementum_description_list_item_decor}
              alt=""
            />
            <p className="elementum-description-list-item-information">
              Leo erat etiam tristique id donec lacus mauris nunc.
            </p>
          </li>
          <li className="elementum-description-list-item">
            <img
              className="elementum-description-list-item-decor"
              src={elementum_description_list_item_decor}
              alt=""
            />
            <p className="elementum-description-list-item-information">
              Risus eget nec cursus.
            </p>
          </li>
        </ul>
        <ul className="elementum-description-list">
          <li className="elementum-description-list-item">
            <img
              className="elementum-description-list-item-decor"
              src={elementum_description_list_item_decor}
              alt=""
            />
            <p className="elementum-description-list-item-information">
              Sed nulla vestibulum sit sed hendrerit sed dictumst bibendum.
            </p>
          </li>
          <li className="elementum-description-list-item">
            <img
              className="elementum-description-list-item-decor"
              src={elementum_description_list_item_decor}
              alt=""
            />
            <p className="elementum-description-list-item-information">
              Enim aenean libero suscipit.
            </p>
          </li>
          <li className="elementum-description-list-item">
            <img
              className="elementum-description-list-item-decor"
              src={elementum_description_list_item_decor}
              alt=""
            />
            <p className="elementum-description-list-item-information">
              Leo erat etiam tristique id donec lacus mauris nunc.
            </p>
          </li>
          <li className="elementum-description-list-item">
            <img
              className="elementum-description-list-item-decor"
              src={elementum_description_list_item_decor}
              alt=""
            />
            <p className="elementum-description-list-item-information">
              Risus eget nec cursus.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Elementum

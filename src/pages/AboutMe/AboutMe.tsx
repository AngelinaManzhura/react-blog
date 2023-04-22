import related_posts_circle from 'assets/related_posts_circle.svg'
import about_banner from 'assets/about_banner.jpeg'
import Work from 'pages/Partnership/Work/Work'
import MyStories from 'pages/Home/MyStories/MyStories'
import People from './People/People'
import Number from './Number/Number'
import Vulputate from './Vulputate/Vulputate'
import Accumsan from './Accumsan/Accumsan'
import Viverra from './Viverra/Viverra'
import Reviews from './Reviews/Reviews'

type Props = {}

const AboutMe = (props: Props) => {
  return (
    <main className="about">
      <section className="blog-banner">
        <img className="blog-banner-image" src={about_banner} alt="" />
        <div className="blog-banner-content">
          <div className="blog-banner-content-logo">
            <img src={related_posts_circle} alt="" />
            <span className="blog-banner-content-logo-description">BEBLOG</span>
          </div>
          <h1 className="blog-banner-content-title">About me</h1>
        </div>
      </section>
      <People />
      <Number />
      <Vulputate />
      <Accumsan />
      <Viverra />
      <Work />
      <Reviews />
      <MyStories />
    </main>
  )
}

export default AboutMe

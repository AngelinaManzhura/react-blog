import Categories from './Categories/Categories'
import './Home.scss'
import MyStories from './MyStories/MyStories'
import PopularPosts from './PopularPosts/PopularPosts'
import RelatedPosts from './RelatedPosts/RelatedPosts'
import Slider from './Slider/Slider'

type Props = {}

const Home = (props: Props) => {
  return (
    <main>
      <Slider />
      <Categories />
      <RelatedPosts />
      <PopularPosts />
      <MyStories />
    </main>
  )
}

export default Home

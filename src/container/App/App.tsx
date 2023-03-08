import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Home from 'pages/Home/Home'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Routes, Route } from 'react-router-dom'
import Blog from 'pages/Blog/Blog'
import Partnership from 'pages/Partnership/Partnership'
import AboutMe from 'pages/AboutMe/AboutMe'
import Contact from 'pages/Contact/Contact'
import Favorites from 'pages/Favorites/Favorites'

type Props = {}

const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/partnership" element={<Partnership />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
      <Footer />
    </StyledEngineProvider>
  )
}

export default App

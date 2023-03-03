import { Route, Routes } from 'react-router-dom'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Home from 'pages/Home/Home'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

type Props = {}

const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </StyledEngineProvider>
  )
}

export default App


import { Routes, Route, BrowserRouter } from "react-router"
import Portfolio from './pages/Portfolio.jsx'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'
import Projects from "./pages/Projects.js"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Stories from "./components/Stories"
import Gallery from "./components/Gallery"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import PageNotFound from "./components/PageNotFound"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <About />
            <Projects />
            <Stories />
            <Gallery />
            <Newsletter />
          </>
        } />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  )
}

export default App

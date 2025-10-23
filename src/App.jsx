import './App.css'
import About from './components/about/About'
import Banner from './components/banner/banner'
import Content from './components/content/Content'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <section className="app">
      <Navbar/>
      <Hero/>
      <Banner/>
      <About/>
      <Content/>
    </section>
  )
}

export default App

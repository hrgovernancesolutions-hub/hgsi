import './App.css'
import About from './components/about/About'
import Banner from './components/banner/Banner'
import Content from './components/content/Content'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Team from './components/team/Team'

function App() {

  return (
    <section className="app">
      <Navbar/>
      <Hero/>
      <Banner/>
      <About/>
      <Content/>
      <Team/>
    </section>
  )
}

export default App

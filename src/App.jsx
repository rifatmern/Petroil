import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Country from './components/Country'
import Gallery from './components/Gallery'
import Service from './components/Service'
import Larnmore from './components/Larnmore'
import Logos from './components/Logos'
import Cards from './components/Cards'
import Location from './components/Location'
import Footer from './components/Footer'
import Copyright from './components/Copyright'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Navbar/>
    <Banner/>
    <Country/>
    <Gallery/>
    <Service/>
    <Larnmore/>
    <Logos/>
    <Cards/>
    <Location/>
    <Footer/>
    <Copyright/>
    </>
  )
}

export default App

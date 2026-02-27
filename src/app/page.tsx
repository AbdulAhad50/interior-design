import React from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/about/About'
import Service from './components/service_section/Service'
import Portfolio from './components/portfolio/Portfolio'
import Process from './components/our_process/Process'
import ContactForm from "./components/contact/ContactForm";
import Footer from './components/footer/Footer'


const Home = () => {
  return (
    <main className='bg-white max-w-[1440px] mx-auto '>
        <div><Nav/></div>
        <div><Hero/></div>
        <div className='mt-[100px]'><About/></div>
        <div><Service/></div>
        <div><Portfolio/></div>
        <div><Process/></div>
        <div><ContactForm/></div>
        <div><Footer/></div>
    </main>
  )
}

export default Home


// @tag:nextEditSuggestions
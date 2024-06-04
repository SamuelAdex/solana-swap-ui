/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SwapSection from '../components/SwapSection'

const Home = () => {
  return (
    <>
      <Header />
      <section className='main-section h-[90vh]'>
        <Hero />
        <SwapSection />
      </section>
    </>
  )
}

export default Home
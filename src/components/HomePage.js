import React from 'react'
import MainBlog from './MainBlog';
import Navigation from './Nav';
import Footer from './Footer';

function HomePage() {
  return (
    <>
      <Navigation />
      <MainBlog />
      <Footer />  
    </>
  )
}

export default HomePage
import React from 'react';
import Announcement from '../Components/Announcement';
import Categories from '../Components/Categories';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Slider from '../Components/Slider';
import Products from '../Products';
// import CategoryItem from '../CategoryItem';
const Home = () => {
  return (
    <div>
       <Announcement/>
       <Navbar/>
       <Slider/>
       <Categories/>
       {/* <CategoryItem/> */}
       <Products/>
       <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home

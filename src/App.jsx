import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/header/Header'
import Services from './components/Bestbooks/BestBook'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'
import AllBooks from './components/AllBooks/AllBooks'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'


import AOS from "aos";
import "aos/dist/aos.css";

import Popup from './components/PopUp/Popup'
const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);


  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-700'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Header handleOrderPopup={handleOrderPopup}/>
      <Services handleOrderPopup={handleOrderPopup}/>
      <Banner />
      < AppStore/>
      <AllBooks/>
      <Testimonial />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
    </>
  )
}

export default App
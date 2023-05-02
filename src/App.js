import React, { useEffect } from 'react';
import './App.css';
import Body from './Components/Body/Body';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(function () {
    Aos.init();
  }, []);


  return (
    <div data-aos="fade" data-aos-delay="200" className='App' >
      <Body />
    </div>
  );
}

export default App;

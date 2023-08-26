'use client'

import AOS from "aos";
import {useEffect} from "react";
import 'aos/dist/aos.css';


interface AboutSectionProps {}

const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []); 
  return (
    <div className="w-full h-screen px-5 py-6 flex flex-col items-center justify-center gap-y-4 bg-gradient-to-b from-violet-50 via-blue-100 to-slate-50">
      <h1 data-aos="fade-down" data-aos-duration="1000"  className="text-3xl font-bold">WELCOME TO STAR MART!</h1>
      <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className="font-semibold text-gray-500">SHOP SMART! SHOP STAR MART</p>
      <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400"className="font-semibold text-gray-500">WHY SHOP ON EARTH WHEN YOU CAN SHOP IN SPACE?</p>
      <p  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" className="font-semibold text-gray-500">OUR DISCOUNTS ARE SO HUGE THE GRAVITY WILL PULL YOU BACK TO EARTH!</p>
    </div>
  );
}
export default AboutSection;
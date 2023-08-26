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
    <div className="w-full h-screen px-5 py-6 flex flex-col items-center justify-center gap-y-4 ">
      <h1 data-aos="fade-down" data-aos-duration="1000"  className="text-3xl font-bold p-10 rounded-md shadow-lg">WELCOME TO 
       <span className="bg-gradient-to-b from-slate-50 via-sky-400 to-sky-50 bg-clip-text text-transparent text-5xl"> STAR-MART</span>!</h1>
      <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className="font-bold p-10 rounded-md shadow-lg text-3xl bg-gradient-to-b from-red-600 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">THE BEST PLACE IN THE GALAXY FOR DEALS</p>
      <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400"className="font-semibold p-10 rounded-md shadow-lg text-3xl bg-gradient-to-b from-amber-200 via-orange-400 to-teal-400 bg-clip-text text-transparent">WHY RETIRE ON EARTH WHEN YOU CAN RETIRE IN SPACE? DONT LIMIT YOURSELF!</p>
      <p  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" className="font-semibold p-10 rounded-md shadow-lg text-3xl bg-gradient-to-b from-gray-700 via-red-400 to-red-500 bg-clip-text text-transparent">OUR DISCOUNTS ARE SO HUGE THEY HAVE THEIR OWN GRAVITY! YOU WILL BUY OR ELSE</p>
    </div>
  );
}
export default AboutSection;
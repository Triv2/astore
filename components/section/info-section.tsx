'use client'
import {useState, useEffect} from'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import Question, { questions } from '../question';


interface InfoSectionProps {}

const InfoSection:React.FC<InfoSectionProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
AOS.init();
}, []);

if (!isMounted) {
return null;
}
  return (
    <div className="pb-10 h-screen flex flex-col gap-10">
      <h3 data-aos="flip-up" className="text-center text-3xl font-bold py-10 px-10 shadow-lg drop-shadow-lg rounded-md mx-auto">ANSWER THE QUESTIONS</h3>
    <div className="grid grid-cols-4 items-center p-5 justify-center gap-y-8 gap-x-8 px-4 sm:px-6 lg:px-8">
    <h3 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"className="text-3xl font-bold p-10 rounded-md shadow-lg dark:bg-gradient-to-tl">
      What kind of Space-Business person are you?</h3>
    <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400"className="p-10 rounded-md shadow-lg dark:bg-gradient-to-br">
      Need to know what is the best type of space place for you to retire at?</p>
    <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600" className="p-10 rounded-md shadow-lg dark:bg-gradient-to-tr">
      Do you know the best way to profit in space?!</p>
    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" className="p-10 rounded-md shadow-lg dark:bg-gradient-to-bl">
      It will figure out your personality for you! So you can focus on other important things like cat feedingtime.</p>
      </div>
    <div className="flex items-center justify-center p-5">
      <Question data={questions}/>
    </div>
  
  </div>
  );
}
export default InfoSection;
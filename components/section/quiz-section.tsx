'use client'
import {useState, useEffect} from'react'
import AOS from "aos";
import 'aos/dist/aos.css';


interface QuizSectionProps {}

const QuizSection:React.FC<QuizSectionProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
AOS.init();
}, []);

if (!isMounted) {
return null;
}
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 gap-x-8 px-4 sm:px-6 lg:px-8 h-screen">
    <h3 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"className="text-3xl font-bold">What kind of Space-Owner are you?</h3>
    <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">Need to know what is the best type of space place for you to retire at?</p>
    <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600">Look no further than our Space-Owner quiz!</p>
    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">It will figure out your personality for you! So you can focus on other important things like cat feedingtime.</p>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-5">
      
    </div>
  </div>
  );
}
export default QuizSection;
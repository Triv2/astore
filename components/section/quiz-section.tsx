'use client'
import {useState, useEffect} from'react'

interface QuizSectionProps {}

const QuizSection:React.FC<QuizSectionProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 gap-x-8 px-4 sm:px-6 lg:px-8 h-screen">
    <h3 className="text-3xl font-bold">What kind of Space-Owner are you?</h3>
    <p>Need to know what is the best type of space place for you to retire at?</p>
    <p>Look no further than our Space-Owner quiz!</p>
    <p>It will figure out your personality for you! So you can focus on other important things like cat feedingtime.</p>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-5">
      
    </div>
  </div>
  );
}
export default QuizSection;
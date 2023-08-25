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
    <div>
      QuizSection
    </div>
  );
}
export default QuizSection;
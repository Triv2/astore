'use client'
import {useState, useEffect} from'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AOS from "aos";
import 'aos/dist/aos.css';

export const questions = [
  {
    title: "Question One",
    subtitle: "The deciding factor",
    question: "Do you like loneliness and vast emptiness?",
  },
  {
    title: "Question Two",
    subtitle: "Always be involved",
    question: "Do you understand how everything works?",
  },
  {
    title: "Question Three",
    subtitle: "Success or failure",
    question: "Have you seen a future where you are the wealthiest alive?",
  },
  {
    title: "Question Four",
    subtitle: "Classified Question",
    question: "How many places have you been to?",
  },
  {
    title: "The Final Question",
    subtitle: "The only thing that matters",
    question: "Do you understand that cats are aliens from space to control us?",
  },
]


interface QuestionProps {
  data: typeof questions;
}

function checkMax(counter:number){
  if(counter >= questions.length){
    return true;
  }
  return false;
}

const Question:React.FC<QuestionProps> = ({
  data = questions,
}) => {

const [isMounted, setIsMounted] = useState(false);
const [counter, setCounter] = useState(0);
console.log(counter);

useEffect(() => {
setIsMounted(true);
AOS.init();
}, []);

if (!isMounted) {
return null;
}
  return (
    <div>
       {checkMax(counter) ?  <Card data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200" className="flex flex-col gap-5 py-5 shadow-lg ">
      <CardHeader>
         <CardTitle>
           THE QUESTIONAIRE IS FINISHED
         </CardTitle>
         <CardDescription>
           GET A LIFE
         </CardDescription>
       </CardHeader>
       <CardContent>
       WHY DO YOU WANT MORE QUESTIONS?
       </CardContent>
       <CardFooter className="flex mx-auto gap-5">
        NO MORE QUESTIONS
       </CardFooter> 
     </Card> : <Card data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200" className="flex flex-col gap-5 py-5 shadow-lg ">
       <CardHeader>
          <CardTitle>
            {data[counter].title}
          </CardTitle>
          <CardDescription>
            {data[counter].subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent>
        {data[counter].question}
        </CardContent>
        <CardFooter className="flex mx-auto gap-5">
          <Button onClick={() => setCounter((c) => c + 1)} >
            Yes
          </Button>
          <Button>
            No
          </Button>
        </CardFooter> 
      </Card>
     }
      </div>
  );
}
export default Question;
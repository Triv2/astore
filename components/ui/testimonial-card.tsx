'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import AOS from "aos";
import {useEffect} from "react";
import 'aos/dist/aos.css';


interface TestimonialCardProps {
  user:string;
  message:string;
  title:string;
}

const TestimonialCard:React.FC<TestimonialCardProps> = ({
  user,
  message,
  title,
  
}) => {
  useEffect(() => {
    AOS.init();
  }, []); 
  return (
    <Card data-aos="flip-right" data-aos-duration="1000" data-aos-delay="200"  className="flex flex-col justify-between w-auto mx-auto tracking-tight max-w-sm">
      <CardHeader>
        <CardDescription className="p-2">
          {message}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-center justify-center gap-2">
        {<p>Star Rating</p>}
        <p>User Image</p>
        <p className="font-bold">{user}</p>
        <p className="text-xs">{title}</p>
      </CardFooter>
    </Card>
  );
}
export default TestimonialCard;
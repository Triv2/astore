'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import AOS from "aos";
import {useEffect} from "react";
import 'aos/dist/aos.css';
import { Avatar, AvatarImage } from "./avatar";
import { Testimonial } from "@/types";


interface TestimonialCardProps {
  data:Testimonial;
}

const TestimonialCard:React.FC<TestimonialCardProps> = ({
  data
}) => {
  useEffect(() => {
    AOS.init();
  }, []); 
  return (
    <Card data-aos="flip-right" data-aos-duration="1000" data-aos-delay="200"  
    className="flex flex-col justify-between bg-slate-50 w-auto mx-auto tracking-tight max-w-sm shadow-lg dark:bg-gradient-to-b">
      <CardHeader>
        <CardDescription className="p-2 text-slate-600 dark:text-white">
          {data.message}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-center justify-center gap-2">
        {<p className="text-gray-500 dark:text-white">{data.rating} / 5</p>}
        <Avatar>
          <AvatarImage src={data.imageUrl} />
        </Avatar>
        <p className="font-bold text-gray-600 dark:text-white">{data.name}</p>
        <p className="text-xs text-gray-500 dark:text-slate-200">{data.title}</p>
      </CardFooter>
    </Card>
  );
}
export default TestimonialCard;
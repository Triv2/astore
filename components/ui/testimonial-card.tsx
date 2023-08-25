'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import AOS from "aos";
import {useEffect} from "react";
import 'aos/dist/aos.css';
import { Avatar, AvatarImage } from "./avatar";


interface TestimonialCardProps {
  name:string;
  message:string;
  title:string;
  imageUrl:string;
}

const TestimonialCard:React.FC<TestimonialCardProps> = ({
  name,
  message,
  title,
  imageUrl
  
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
        <Avatar>
          <AvatarImage src={imageUrl} />
        </Avatar>
        <p className="font-bold">{name}</p>
        <p className="text-xs">{title}</p>
      </CardFooter>
    </Card>
  );
}
export default TestimonialCard;
'use client'

import { cn } from "@/lib/utils";
import { Billboard as BillBoardType } from "@/types";
import Image from "next/image";

import AOS from "aos";
import {useEffect} from "react";
import 'aos/dist/aos.css';
import { Button } from "./ui/button";

interface BillboardProps {
  data: BillBoardType; 
  className?: string;
  subText?: string;
  main?:boolean;
};


export const Billboard: React.FC<BillboardProps> = ({
  data,
  className,
  subText,
  main,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
  <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
    <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      style={{backgroundImage:`url(${data.imageUrl})`}}>
      <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
        <div className={cn("font-bold text-white text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs",className)}>
        
        <div className="flex items-center">
        
        {data.label}
        
        </div>
        {subText && <p className="text-xl p-5">{subText}</p>}
        {main && <div className="flex items-center justify-center gap-x-5"><Button>Contact Us</Button></div>}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Billboard;
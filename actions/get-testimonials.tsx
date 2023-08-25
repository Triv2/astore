import { Testimonial } from "@/types";

const URL =`${process.env.NEXT_PUBLIC_API_URL}/testimonals`;

const getTestimonials = async (): Promise<Testimonial[]> => { 
  const res = await fetch(URL);
  
  return res.json();
};

export default getTestimonials;

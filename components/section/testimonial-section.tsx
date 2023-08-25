import getTestimonials from "@/actions/get-testimonials";
import TestimonialCard from "../ui/testimonial-card";




// const testimonials = [
//   {
//     user: "Bob Johnson",
//     message: "If you ever need a place to stay in the future in space, Star Mart has you covered!",
//     title:"Regional Real Estate",
//     imageSrc:"vercel.svg",
//     rating:"4"
// },
// {
//   user: "Maria Altez",
//   message: "The best outer-space real estate service around! I went from being a non landowner to one of the largest in space!",
//   title:"Custodial Services",
//   imageSrc:"vercel.svg",
//   rating:"4.5"
// },
// {
//   user: "JJ Tugboat",
//   message: "As the largest man alive, there is only one place large enough to contain my physique and that is the final frontier!",
//   title:"Absolute Beast",
//   imageSrc:"vercel.svg",
//   rating:"5"
// },
// {
//   user: "Master Yuan",
//   message: "The only place to find eternal peace is in space.",
//   title:"Zen Master",
//   imageSrc:"vercel.svg",
//   rating:"4"
// },
// {
//   user: "Alice Cromwell",
//   message: "Ever need a place to eat mushrooms and go on an adventure.",
//   title:"Drug Administrator",
//   imageSrc:"vercel.svg",
//   rating:"5"
// },
// ];


const TestimonialSection = async () => {
  const testimonials= await getTestimonials();
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 gap-x-8 px-4 sm:px-6 lg:px-8 h-full">
      <h3 className="text-3xl font-bold">Testimonials</h3>
      <p>Do not take our word for it, hear from our clients and customers!</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-5">
        {testimonials.map((testimonial)=>(
          <TestimonialCard
          key={testimonial.id}
          data={testimonial}
          />
        ))}
      </div>
    </div>
  );
}
export default TestimonialSection;
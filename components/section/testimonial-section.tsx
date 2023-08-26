import getTestimonials from "@/actions/get-testimonials";
import TestimonialCard from "../ui/testimonial-card";



const TestimonialSection = async () => {
  const testimonials= await getTestimonials();
  return (
    <div className="flex flex-col items-center py-10 justify-center gap-y-8 gap-x-8 px-4 sm:px-6 lg:px-8 h-full ">
      <h3 className="text-3xl font-bold p-10 rounded-md shadow-lg drop-shadow-lg dark:bg-gradient-to-b">Testimonials</h3>
      <p className="p-10 rounded-md shadow-lg dark:bg-gradient-to-b">Do not take our word for it, hear from our clients and customers!</p>
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
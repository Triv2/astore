import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import AboutSection from "@/components/section/about-section";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import TestimonialSection from "@/components/section/testimonial-section";
import QuizSection from "@/components/section/quiz-section";
import ContactSection from "@/components/section/contact-section";
import { Separator } from "@/components/ui/separator";

export const revalidate = 0;

const HomePage = async () => {
  const billboard= await getBillboard("11736011-a02d-4c3d-8991-a2bd37d17952");
  const products= await getProducts({isFeatured:true});
  return (
    <Container className="w-full ">
      <div className="space-y-10 pb-10 ">
        <Billboard data={billboard} />
        <Separator/>
      <AboutSection/>
      <div className="flex flex-row gap-y-8 gap-x-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
      <QuizSection/>
      <Separator/>
      <TestimonialSection/>
      <ContactSection/>
      </div>
    </Container>
  );
}

export default HomePage;
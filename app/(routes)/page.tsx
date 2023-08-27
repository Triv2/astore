import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import AboutSection from "@/components/section/about-section";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import TestimonialSection from "@/components/section/testimonial-section";
import InfoSection from "@/components/section/info-section";
import ContactSection from "@/components/section/contact-section";
import { Separator } from "@/components/ui/separator";

export const revalidate = 0;

const HomePage = async () => {
  const billboard= await getBillboard("11736011-a02d-4c3d-8991-a2bd37d17952");
  const products= await getProducts({isFeatured:true});
  return (
    <Container className="w-auto">
      <div className="space-y-10 pb-10 dark:bg-gradient-to-b from-slate-900 via-slate-700 to-slate-800 ">
        <Billboard main={true} subText="SHOP SMART SHOP S-MART!" className="bg-gradient-to-b from-slate-50 via-sky-300 to-slate-50 bg-clip-text text-transparent drop-shadow-lg " data={billboard} />
        <Separator/>
      
      <div className="flex flex-row gap-y-8 gap-x-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
      <AboutSection/>
      <InfoSection/>
      <Separator/>
      <TestimonialSection/>
      <Separator/>
      <ContactSection/>
      </div>
    </Container>
  );
}

export default HomePage;
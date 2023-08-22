import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard= await getBillboard("1f5d23a8-bd00-4e22-b6f9-17ba22899291");
  const products= await getProducts({isFeatured:true});
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
      </div>
    </Container>
  );
}

export default HomePage;
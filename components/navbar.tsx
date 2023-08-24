import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/mainnav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import { ThemeToggle } from "./theme-toggle";

export const revalidate= 0;

const Navbar = async () => {
  
  const categories = await getCategories();
 

  return (
    <nav className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STAR MART</p>
          </Link>
          <MainNav data={categories}/>
          
          <NavbarActions/>
          <ThemeToggle/>
        </div> 
      </Container>
    </nav>
  );
}

export default Navbar;
import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/mainnav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import { ThemeToggle } from "./theme-toggle";
import MobileNav from "./mobilenav";

export const revalidate= 0;

const Navbar = async () => {
  
  const categories = await getCategories();
 

  return (
    <nav className=" shadow-lg">
      <Container>
        <div className=" relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STAR MART</p>
          </Link>
          <MainNav className="hidden mx-6 md:flex items-center space-x-4 lg:space-x-6" data={categories}/>
          <MobileNav data={categories}/>
          <NavbarActions/>
          <ThemeToggle/>
        </div> 
      </Container>
    </nav>
  );
}

export default Navbar;
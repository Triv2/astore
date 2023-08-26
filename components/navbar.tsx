import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/mainnav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import { ThemeToggle } from "./theme-toggle";
import MobileNav from "./mobilenav";
import Image from "next/image";

export const revalidate= 0;

const Navbar = async () => {
  
  const categories = await getCategories();
 

  return (
    <nav className=" shadow-lg dark:bg-gradient-to-b from-blue-900 via-slate-800 to-blue-800">
      <Container>
        <div className=" relative px-4 sm:px-6 lg:px-8 flex  h-16 items-center">
        
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
           <span className="flex"> 
           <Image src="/logo.webp" width={32} height={24} alt="logo" />
            <p className="font-bold text-xl bg-gradient-to-b from-slate-500 via-sky-500 to-slate-500 bg-clip-text text-transparent ">
              STAR-MART
              </p>
          <Image src="/logo.webp" width={32} height={24} alt="logo" />
            </span>
          </Link>

          <MainNav className="hidden mx-6 md:flex items-center space-x-4 lg:space-x-6 " data={categories}/>
          <MobileNav data={categories}/>
          
          <NavbarActions/>
          <ThemeToggle/>
        </div> 
      </Container>
    </nav>
  );
}

export default Navbar;
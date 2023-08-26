'use client'

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation"

interface MainNavProps {
  data : Category[];
  className?: string;
};

const MainNav:React.FC<MainNavProps> = ({
  data,
  className
}) => {

  const pathname = usePathname();
  
  const routes = data.map((route) => ({
    href:`/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))
  
  
  return (
    <nav className={className}>
      {routes.map((route)=>(
        <Link
        key={route.href}
        href={route.href}
        className={cn("text-sm font-medium transition-colors  hover:text-sky-500 dark:text-white dark:hover:text-sky-500",
        route.active ? "text-sky-300 dark:text-blue-500" : "text-neutral-500")}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
export default MainNav;
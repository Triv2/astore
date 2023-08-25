'use client'
import {useState, useEffect} from'react'
import { Menu } from 'lucide-react';

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import  MainNav  from '@/components/mainnav';
import { Category } from '@/types';

interface MobileNavProps {
  data: Category[];
}

const MobileNav:React.FC<MobileNavProps> = ({
  data
}) => {

const [isMounted, setIsMounted] = useState(false);


useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="flex md:hidden ml-4">
          <Button variant="outline" size="icon">
            <Menu/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-2" >
        <MainNav data={data} className="mx-6 space-x-1 flex flex-col items-start gap-2"/>
        </DropdownMenuContent>
        </DropdownMenu>
  );
}
export default MobileNav;
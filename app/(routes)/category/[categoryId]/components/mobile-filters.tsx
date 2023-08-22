'use client'

import Button from "@/components/ui/button";
import { Color, Size } from "@/types";
import { Plus } from "lucide-react";
import { useState, useEffect } from "react";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
};

const MobileFilters:React.FC<MobileFiltersProps> = ({
  sizes,
  colors
}) => {

  const[open, setOpen] = useState(false);
  const onOpen= () => setOpen(true);
  const onClose= () => setOpen(false);

  return (
    <>
    <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
      Filters
      <Plus size= {20}/>
    </Button>
    </>
  );
}
export default MobileFilters;
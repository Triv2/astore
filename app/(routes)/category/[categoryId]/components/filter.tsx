'use client'

import qs from "query-string";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import {Button} from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps {
  data:( Size | Color) [];
  name:string;
  valueKey:string;
}

const Filter:React.FC<FilterProps> = ({
  data,
  name,
  valueKey
}) => {
  const searchParams= useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);
  const onClick = (id:string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id
    };
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl({
      url: window.location.href,
      query
    }, { skipNull: true })

    router.push(url);
  }

  return (
  <div className="mb-8">
    <h3 className="text-lg font-bold mb-2">{name}</h3>
    <hr className="my-4"/>
    <div className="flex flex-wrap gap-2">
      {data.map((filter)=> (
        <div key={filter.id} className="flex items-center">
          <Button variant="outline" className={cn("rounded-md drop-shadow-lg text-sm text-gray-800 p-2 bg-white dark:text-white dark:bg-slate-700 border dark:hover:bg-slate-500 border-gray-300", selectedValue=== filter.id && "bg-black text-white dark:bg-black ")}
            onClick={() => onClick(filter.id)}
          >
            {filter.name}
          </Button>
        </div>
      ))}
    </div>
  </div>
  );
}
export default Filter;
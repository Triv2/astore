'use client'
import {useState, useEffect} from'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface QuestionProps {
  [
    
  ]
}

type question = [
  {
    question:string;
    answer:boolean;
  }
]

const Question:React.FC<QuestionProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
      <Card className="flex flex-col gap-5 py-5 shadow-lg ">
        <CardHeader>
          <CardTitle>
            Question One
          </CardTitle>
          <CardDescription>
            The deciding factor.
          </CardDescription>
        </CardHeader>
        <CardContent>
        How many cats do you own?
        </CardContent>
        <CardFooter className="flex mx-auto gap-5">
          <Button >
            Yes
          </Button>
          <Button>
            No
          </Button>
        </CardFooter>
      </Card>
  );
}
export default Question;
'use client'
import {useState, useEffect} from'react'

interface CartPageProps {}

const CartPage = () => {
  
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
  setIsMounted(true);
  }, []);
  
  if (!isMounted) {
  return null;
  }
  
  return (
  <div>
  CartPage
  </div>
  );
}
export default CartPage;
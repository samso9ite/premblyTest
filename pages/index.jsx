import Item from "@/components/Item";
import productsData from '../utils/products.json'
import Link from "next/link";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  
  return (
    <>
      <h2 className="text-center pt-5 pb-5">Shop Page  
        <Link href={'/cartItems'}><button className="btn btn-primary">View Cart</button></Link>
      </h2>
      <div class="row " >
        { 
          productsData?.products.map((productData) => (
            <Item key={productData.id} product={productData}/>
          ))
        }
      </div>
      <ToastContainer />
    </>

  )
}

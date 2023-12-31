import Item from "../components/Item";
import products from '../utils/products.json'
import Link from "next/link";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  
  return (
    <>
      <h2 className="text-center pt-5 pb-5">Shop Page  
        <Link href={'/cartItems'}><button className="btn btn-primary">View Cart</button></Link>
      </h2>
      <div class="row " >
        { 
          products.map((item) => (
            <Item key={item.id} product={item}/>
          ))
        }
      </div>
      <ToastContainer />
    </>

  )
}

export default Home
import Item from "../components/Item";
import products from '../utils/products.json'
import Link from "next/link";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home:React.FC = (props) => {
 
  return (
    <>
      <h2 className="text-center pt-5 pb-5">Shop Page  
        <Link href={'/cartItemsTS'}><button className="btn btn-primary">View Cart</button></Link>
      </h2>
      <div className="row" >
        { 
          products.map((item:Product) => (
            <Item key={item.id} product={item}/>
          ))
        }
      </div>
      <ToastContainer />
    </>

  )
}

export default Home
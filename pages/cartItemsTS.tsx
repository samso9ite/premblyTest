import CartSummary from "../components/cartSummary";
import { RootState } from "../store";
import { cartActions } from "../store/cart-slice";
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

const CartItems:React.FC = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state:RootState) => state.cart);
    let itemQuantity = cart.totalQuantity
    let totalItem = cart.items.length
    const totalPrice = cart.totalPrice.toFixed(2)

    const increaseQuantity = (item:Product) => {
        dispatch(cartActions.addItemToCart(item))
    }
    const decreaseQuantity = (id:string) => {
        dispatch(cartActions.removeItemFromCart(id))
    }
    const removeItem = (id:string) => {
        dispatch(cartActions.removeItem(id))
    }
    return(
        <>
            <div className="card mt-5">
           <div className="row ">
               <div className="col-md-8 cart">
                   <div className="title">
                       <div className="row">
                           <div className="col"><h4><b>Shopping Cart</b></h4></div>
                           <div className="col align-self-center text-right text-muted" style={{fontWeight:'600'}}>{totalItem} items</div>
                       </div>
                   </div>  
                   {cart.items?.map((item) => (
                    <div className="row border-top border-bottom">
                    <div className="row main align-items-center">
                        <div className="col-2"><img className="img-fluid" src={item.image} /></div>
                        <div className="col">
                            <div className="row text-muted">{item.name}</div>
                            <div className="row">{item.description}</div>
                        </div>
                        <div >
                            <span style={{cursor:'pointer'}} onClick={() => decreaseQuantity(item.id)}> - </span>
                            <a  className="border"> 1 </a><span style={{cursor:'pointer'}} onClick={() => increaseQuantity(item)}>+</span>
                        </div>
                        <div className="col">#{item.price} <span className="close" onClick={() => removeItem(item.id)}>&#10005;</span></div>
                    </div>
                    </div>
                   )) 
                        
                    }
                  <Link href={'/products'}> <div className="back-to-shop"><span className="text-muted">Back to shop</span></div> </Link>
               </div>
               <CartSummary itemQuantity={itemQuantity}  totalItem={totalItem} totalPrice ={totalPrice}/>
           </div>
            </div>
       </>
    )
}

export default CartItems
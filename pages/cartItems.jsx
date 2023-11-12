import CartSummary from "../components/cartSummary";
import { cartActions } from "../store/cart-slice";
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

const CartItems = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);
    let itemQuantity = cart.totalQuantity
    let totalItem = cart.items.length
    const totalPrice = cart.totalPrice.toFixed(2)

    const increaseQuantity = (item) => {
        dispatch(cartActions.addItemToCart(item))
    }
    const decreaseQuantity = (id) => {
        dispatch(cartActions.removeItemFromCart(id))
    }
    const removeItem = (id) => {
        dispatch(cartActions.removeItem(id))
    }
    return(
        <>
            <div class="card mt-5">
           <div class="row ">
               <div class="col-md-8 cart">
                   <div class="title">
                       <div class="row">
                           <div class="col"><h4><b>Shopping Cart</b></h4></div>
                           <div class="col align-self-center text-right text-muted" style={{fontWeight:'600'}}>{totalItem} items</div>
                       </div>
                   </div>  
                   {cart.items?.map((item) => (
                    <div class="row border-top border-bottom">
                    <div class="row main align-items-center">
                        <div class="col-2"><img class="img-fluid" src={item.image} /></div>
                        <div class="col">
                            <div class="row text-muted">{item.name}</div>
                            <div class="row">{item.description}</div>
                        </div>
                        <div class="col">
                            <span className={{pointer:'cursor'}} onClick={() => decreaseQuantity(item.id)}> - </span>
                            <a  class="border"> 1 </a><span onClick={() => increaseQuantity(item)}>+</span>
                        </div>
                        <div class="col">#{item.price} <span class="close" onClick={() => removeItem(item.id)}>&#10005;</span></div>
                    </div>
                    </div>
                   )) 
                        
                    }
                  <Link href={'/'}> <div class="back-to-shop"><span class="text-muted">Back to shop</span></div> </Link>
               </div>
               <CartSummary itemQuantity={itemQuantity}  totalItem={totalItem} totalPrice ={totalPrice}/>
           </div>
            </div>
       </>
    )
}

export default CartItems
import { cartActions } from "../store/cart-slice";
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Item:React.FC = (props) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);
    const { name, price, description, id, image } = props.product;
    
    const addToCartHandler = () => {
        const newTotalQuantity = cart.totalQuantity + 1;
        const updatedItems = cart.items.slice(); // create copy via slice to avoid mutating original state
        const existingItem = updatedItems.find((item) => item.id === id);
        const totalPrice = cart.totalPrice + price;
        if (existingItem) {
          const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation
          updatedItem.quantity++;
          
          const existingItemIndex = updatedItems.findIndex(
            (item) => item.id === id
          );
          updatedItems[existingItemIndex] = updatedItem;
        } else {
          updatedItems.push({
            id: id,
            price: price,
            quantity: 1,
            totalPrice: price,
            name: name,
            image:image
          });
         
        }
        const newCart = {
            totalQuantity: newTotalQuantity,
            items: updatedItems,
            totalPrice: totalPrice
        };
      
        dispatch(cartActions.replaceCart(newCart));
        toast.success("Item Added to Cart", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
          })

    }

    return (
        <>
           <div className="card" style={{width:'300px'}}>
                <img className="card-img-top" src={image} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{name} <span style={{float:'right', color:'orange'}}>#{price}</span></h4>
                    <p className="card-text">{description}</p>
                    <div  className="btn btn-primary" onClick={addToCartHandler}>Add to cart</div>
                </div>
            </div>
        </>
    )
}

export default Item
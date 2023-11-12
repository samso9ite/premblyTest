type Props = {
    totalItem:number;
    totalPrice:number;
    itemQuantity:number
}

const CartSummary:React.FC<Props> = ({totalItem, totalPrice, itemQuantity}) => {
   
    return( 
    <>
        <div className="col-md-4 summary">
            <div><h5><b>Summary</b></h5></div>
            <div className="row pt-5" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0', fontWeight:'700',}}>
                <div className="col">TOTAL ITEMS</div>
                <div className="col text-right">{totalItem}</div>
            </div>
            <div className="row pt-5" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0', fontWeight:'700',}}>
                <div className="col">TOTAL ITEM QUANTITY</div>
                <div className="col text-right">{itemQuantity}</div>
            </div>
            <div className="row pt-5" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0', fontWeight:'700',}}>
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">#{totalPrice}</div>
            </div>
            <button className="btn btn-primary">CHECKOUT</button>
        </div>
    </>
    )
}

export default CartSummary
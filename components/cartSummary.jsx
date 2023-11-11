const CartSummary = (props) => {
    const {totalItem, totalPrice, itemQuantity} = props
    return( 
    <>
        <div class="col-md-4 summary">
            <div><h5><b>Summary</b></h5></div>
            <div class="row pt-5" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0', fontWeight:'700',}}>
                <div class="col">TOTAL ITEMS</div>
                <div class="col text-right">{totalItem}</div>
            </div>
            <div class="row pt-5" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0', fontWeight:'700',}}>
                <div class="col">TOTAL ITEM QUANTITY</div>
                <div class="col text-right">{itemQuantity}</div>
            </div>
            <div class="row pt-5" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0', fontWeight:'700',}}>
                <div class="col">TOTAL PRICE</div>
                <div class="col text-right">#{totalPrice}</div>
            </div>
            <button class="btn btn-primary">CHECKOUT</button>
        </div>
    </>
    )
}

export default CartSummary
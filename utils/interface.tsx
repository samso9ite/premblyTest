interface Product {
    id:number;
    name:string;
    description:string;
    price:number;
    image:string;
    quantity:number
}

interface CartState {
    items: Product[];
    totalQuantity: number;
    totalPrice: number;
    totalItem:number;
}
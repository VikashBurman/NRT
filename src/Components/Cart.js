import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    
    
    return(
        <>
            <h2>Cart Page</h2>
            <ItemList items={cartItems}/>
        </>
    )
}
export default Cart;
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    console.log(cartItems);
    const handleClick=()=>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">
           <h1 className="font-bold text-2xl">Cart</h1> 
            <div className="w-6/12 m-auto">
           <ItemList  cards={cartItems} />
           </div>
           {cartItems.length ? 
           <button onClick={handleClick} className="bg-orange-400 shadow-lg shadow-blue-500/50 text-white font-bold rounded-xl p-2 ">clear</button> 
           : 
           <p className="font-bold text-orange-500 mt-10">Cart is Empty</p>}

        </div>
    );
}
export default Cart;
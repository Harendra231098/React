import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList=({cards})=>{
    //const {id,name}=cards?.card?.info;
    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        dispatch(addItem(item));
    }

    return(
        <div>
        {
            cards.map((item)=>{
                const {id,name,price,defaultPrice,description,imageId} = item?.card?.info;
                return(
                <div key={id} className="p-2 m-2  border-gray-300 border-b-2 text-bold text-left flex justify-evenly">
                    <div className="w-10/12">
                        <div className="mb-3 font-semibold">
                            <span >{name}</span><span> - </span>
                            <span >₹ {price? price/100: defaultPrice/100}</span>
                        </div>
                            <p className="text-xs">{description}</p> 
                    </div>
                    <div className="flex flex-col ml-10  justify-evenly w-2/12 ">
                        <img className="rounded mb-4 shadow-lg" src={CDN_URL+imageId} alt={"-No Image"} /> 
                        <button onClick={()=>handleAddItem(item)} className="bg-orange-400 shadow-lg shadow-blue-500/50 text-white font-bold rounded ">Add+</button>
                   </div>   
                </div>

                )
            })

        }
        </div>
    );
}

export default ItemList;
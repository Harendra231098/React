import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory=({category,item,OnClick})=>{
    const {itemCards,title} = category?.card?.card;
    //console.log(itemCards);
    //confirm.log(itemCards?.card?.info)
   // const [showItem,setShowItem] = useState(false);


    const ch= item ? "size-5 rotate-180 transition" : "size-5";

   // if(item)
    //setShowItem((showItem)=>!showItem);

    return(
        <div className="w-6/12 bg-gray-100 mx-auto my-4 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={OnClick} >
        <span className="font-bold">{title} ({itemCards.length})</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={ch}   >
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
        </div>
        {item && <ItemList cards={itemCards}/>}
        </div>
       
       
    );
}



export default ResCategory;
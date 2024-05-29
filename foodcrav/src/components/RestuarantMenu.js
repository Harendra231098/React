import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestuarantMenu from "../utils/useRestuaranrMenu";
const RestuarantMenu=()=>{
    
   // const [resInfo,setResInfo]=useState(null);
    const {resId} = useParams();
    const resInfo = useRestuarantMenu(resId); //customhook
    
  /*  useEffect(()=>{
        fetchData();
    },[]);

        const fetchData = async ()=>{
            const data = await fetch(MENU_API + resId);
            //const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.50330&lng=80.64650&restaurantId=73023");
            const json = await data.json();

           //console.log(json?.data?.cards[2]?.card?.card?.info);
           setResInfo(json.data);
        } */

        if(resInfo === null) return <Shimmer />

        const {id,name, cuisines, costForTwoMessage, cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;
        const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")+"-"+costForTwoMessage}</p>
            
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>{
                    const {id,name} = item?.card?.info;
                    return <li key={id}>{name}</li>
                })}
            </ul>
        </div>
    );
}
export default RestuarantMenu;
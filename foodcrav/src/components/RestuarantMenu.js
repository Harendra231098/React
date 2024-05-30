import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestuarantMenu from "../utils/useRestuaranrMenu";
import ResCategory from "./ResCategory";
const RestuarantMenu=()=>{
    
   // const [resInfo,setResInfo]=useState(null);
    const {resId} = useParams();
    const resInfo = useRestuarantMenu(resId); //customhook

  //  const [showItem,setShowItem] = useState(false);
    const [showIndex,setShowIndex] = useState(null);

   /*const handleClick=()=>{
         
       // if(title===)
        setShowItem((showItem)=>!showItem);

    }
    
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
        //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

        const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((obj)=>obj?.card?.card?.["@type"]?.includes("v2.ItemCategory"));

    return (
        <div className="menu text-center">
            <h1 className="font-bold my-4 text-2xl">{name}</h1>
            <p className="font-bold mb-4" >
                {cuisines.join(", ")+"-"+costForTwoMessage}
            </p>
            {/*categories accordians*/}
            {categories.map((c,index)=> 
            <ResCategory 
            key={c?.card?.card?.title} 
           // OnClick={(title1)=>{title1===c?.card?.card?.title &&  setShowItem((showItem)=>!showItem);}}
            item={index===showIndex} 
            OnClick={()=>{ showIndex===index ? setShowIndex(null) : setShowIndex(index) }}
            category={c} /> )}
        </div>
    );
}
export default RestuarantMenu;
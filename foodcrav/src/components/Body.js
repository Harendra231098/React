import RestuarantCard from "./RestuarantCard";
import resObjs from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {

    //State Variable
    const [listRes,setListRes] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
     
    const fetchData= async ()=>{
     const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");   
     const json = await data.json();

     console.log(json);

    //optional chaining
     setListRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    
    //conditional rendering
   {/*if(listRes.length === 0)
return <Shimmer />;*/}

    return listRes.length === 0 ? <Shimmer /> : (
        <div className='body'>
      <div className='filter'>
        <button onClick={()=>
        {
            setListRes(listRes.filter((res)=>res.info.avgRating > 4));
        }
        } className="filter-btn">Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {
          listRes.map((resObj)=><RestuarantCard key={resObj.info.id} resdata={resObj} />)
        }  
      </div>
    </div>
    );
}
export default Body;
import RestuarantCard from "./RestuarantCard";
import resObjs from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

    //Local State Variable
    //Try to create useState on top
    //Never create useState in if condition.It will create a inconsistency
    //Dont create useState inside a funtion they are meant to be created in funtional components

    //Whenever state variables update,react triggers reconciliation cycle(re-renders the component)
    const [listRes,setListRes] = useState([]);
    const [searchText,setSearchText]=useState("");
    const [filteredlist,setFilteredList]=useState([]);

 

    useEffect(()=>{
        fetchData();
    },[]);
     
    const fetchData= async ()=>{
     const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");   
     const json = await data.json();

    // console.log(json);
    // console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    //optional chaining
     setListRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    
    //conditional rendering
   {/*if(listRes.length === 0)
return <Shimmer />;*/}
const onlineStatus = useOnlineStatus();

if(onlineStatus === false) return <h1>Looks like you were offline</h1>

    return listRes.length === 0 ? <Shimmer /> : (
    <div className='body'>
      <div className="search-filter">
        <div className="search">
            <input type='text' className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button onClick={()=>{
                const filteredlist = listRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredList(filteredlist);
            } }className='search-btn' >Search</button>
        </div>
        
        <button onClick={()=>
        {
            setFilteredList(listRes.filter((res)=>res.info.avgRating > 4));
        }
        } className="filter-btn">Top Rated Restaurants</button>
        
      </div>
      <div className='res-container'>
        {
          filteredlist.map((resObj)=><Link key={resObj.info.id} to={"/restaurant/"+resObj.info.id}> <RestuarantCard key={resObj.info.id} resdata={resObj} /> </Link>)
        }  
      </div>
    </div>
    );
}
export default Body;
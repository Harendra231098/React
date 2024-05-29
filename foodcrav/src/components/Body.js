import RestuarantCard,{withPromotedLable} from "./RestuarantCard";
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
    const RestuarantPromoted = withPromotedLable(RestuarantCard);
 

    useEffect(()=>{
        fetchData();
    },[]);
     
    const fetchData= async ()=>{
     const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");   
     const json = await data.json();

    // console.log(json);
    // console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    //optional chaining
     setListRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    
    //conditional rendering
   {/*if(listRes.length === 0)
return <Shimmer />;*/}
const onlineStatus = useOnlineStatus();

if(onlineStatus === false) return <h1>Looks like you were offline</h1>

    return listRes.length === 0 ? <Shimmer /> : (
    <div className='body'>
      <div className='res-card flex justify-between'>
        <div className="search">
            <input type='text' className="m-2.5 hover:border-collapse outline-none  border border-solid  border-b-orange-400 shadow-lg pb-1 pl-1 rounded-md" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button onClick={()=>{
                const filteredlist = listRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredList(filteredlist);
            } }className='bg-orange-400 shadow-lg shadow-blue-500/50 hover:shadow-orange-500/50 text-white font-bold py-0 px-4 pb-1  rounded ' >Search</button>
        </div>
        
        <button onClick={()=>
        {
            setFilteredList(listRes.filter((res)=>res.info.avgRating > 4));
        }
        } className='bg-orange-400 shadow-lg shadow-blue-500/50 text-white font-bold py-0 pb-1 px-4 border rounded m-2 hover:shadow-orange-500/50'>Top Rated Restaurants</button>
        
      </div>
      <div className='flex flex-wrap'>
        {
          filteredlist.map((resObj)=>

          <Link className='no-underline' key={resObj.info.id} to={"/restaurant/"+resObj.info.id}> 

           {/*If a restuarant is promoted add a promoted label to it*/}
           {resObj.info.avgRating > 4 ? <RestuarantPromoted key={resObj.info.id} resdata={resObj} /> :<RestuarantCard key={resObj.info.id} resdata={resObj}/>  } 
           
          </Link>)

        }  
      </div>
    </div>
    );
}
export default Body;
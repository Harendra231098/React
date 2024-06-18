import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";

const Head = () =>{

const [searchQuery,setSearchQuery] = useState(""); 
const [suggestions,setSuggestions] = useState([]);
const [showSuggestions,setShowSuggestions] = useState(false);
const searchCache = useSelector((store)=>store.search);
const dispatch = useDispatch();

useEffect(()=> {

//console.log(searchQuery);
const timer = setTimeout(()=>
    {   
        if(searchCache[searchQuery])
        setSuggestions(searchCache[searchQuery]);
        else
        getSearchSuggestions();
    
    
    },200);

return ()=> {
 clearTimeout(timer);    
}

},[searchQuery]);

const getSearchSuggestions = async() => {
     const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
     const json = await data.json();
    // console.log(json);
     setSuggestions(json[1]);
     dispatch(cachedResults({
        [searchQuery] : json[1],
     }));
}


/*const toggleMenuHandler = () => {
    dispatch(toggleMenu()); 
}*/

    return (
    <div className="head grid grid-flow-col p-2 shadow-lg ">

        <div className="flex col-span-1">
            <img  onClick={() =>{dispatch(toggleMenu())} } className="h-10 cursor-pointer" alt="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" />
            <img className="h-6 m-2" alt="youtube-icon"  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png" />
        </div>
        <div className="Search col-span-10  px-10">
            <div>
            <input value={searchQuery} 
            onFocus={()=>setShowSuggestions(true)} 
            onBlur={()=>setShowSuggestions(false)}
            onChange={(e)=> setSearchQuery(e.target.value) } 
            className=" rounded-l-full w-1/2  border border-gray-400 p-2" type="text" />
            <button className="rounded-r-full border  border-gray-400 bg-gray-200 p-2">
                🔍
            </button>
        </div>

       {showSuggestions && <div className="absolute bg-white py-2 px-5 w-[33rem]" >
            <ul>
                {suggestions.map((val,key)=><li key={key}  className="py-2 shadow-sm hover:bg-gray-100">{val}</li>)}
            </ul>
        </div> 
        }
        </div>
        <div>
            <img className="h-8 m-2 col-span-1 " alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
        </div>
    </div>
    )
}
 

export default Head;


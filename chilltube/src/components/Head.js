import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () =>{

const dispatch = useDispatch();

/*const toggleMenuHandler = () => {
    dispatch(toggleMenu());
}*/

    return (
    <div className="head grid grid-flow-col p-2 shadow-lg ">

        <div className="flex col-span-1">
            <img  onClick={() =>{dispatch(toggleMenu())} } className="h-10 cursor-pointer" alt="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" />
            <img className="h-6 m-2" alt="youtube-icon"  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png" />
        </div>
        <div className="Search col-span-10 text-center px-10">
            <input className=" rounded-l-full w-1/2  border border-gray-400 p-2" type="text" />
            <button className="rounded-r-full border  border-gray-400 bg-gray-200 p-2">
                🔍
            </button>
        </div>

        <div>
            <img className="h-8 m-2 col-span-1 " alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
        </div>
    </div>
    )
}
 

export default Head;


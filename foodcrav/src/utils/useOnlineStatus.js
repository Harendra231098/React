import { useEffect, useState } from "react";

const useOnlineStatus=()=>{

    const [onlineStatus,setOnlineStataus] = useState(true);

    useEffect(()=>{

        window.addEventListener("online",(event)=>setOnlineStataus(true));
        window.addEventListener("offline",(event)=>setOnlineStataus(false));

    },[]);

    //boolean value
    return onlineStatus;
}
export default useOnlineStatus;
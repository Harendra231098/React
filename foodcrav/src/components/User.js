import { useState } from "react";

const User = ({name}) => {
    const [count,setCount] = useState(0);
    return(
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : Vizag</h3>
            <h3>Contact : 223939039</h3>

        </div>
    );
}
export default User;
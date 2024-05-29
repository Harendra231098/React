
import React  from "react";
class UserClass extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            count:0,
            count2:0,
            userInfo : {
                name:"dummy"
            }
        }
        console.log("child constructor");
    }

    async componentDidMount(){
        console.log("child mount");
        const data = await fetch("https://api.github.com/users/Harendra231098");
        const userInfo = await data.json();

        this.setState(
            {
                userInfo:userInfo,
            }
        )
           
        console.log(userInfo);
    }
    //never directly update state variables
    //return piece of jsx to dispaly on ui
    render() {
        const {name,location} = this.props;
        const {count,count2,userInfo} = this.state;
        console.log("child render");
        return(
        
        <div className="user-card">
        <h1>Count:{count}</h1>
        <h1>Count2:{count2}</h1>
        <button onClick={()=>{
            this.setState({
                count:count+1,
                count2:count2+1
            })
        }}>count increase</button>
        <h2>Name : {userInfo.login}</h2>
        <h3>Location : {location}</h3>
        <h3>Contact : 223939039</h3>

    </div>
    )}
}

export default UserClass;
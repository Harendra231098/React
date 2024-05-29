import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component {

constructor(props)
{
    super(props);
    console.log("parent constructor");
}

    componentDidMount(){
        console.log("parent mount");
    }
    

    render() {
        console.log("parent render");
        return(
        <div>
        <h1>About</h1>
        <h2>This is react web series</h2>
        <User name={"Harendra(function)"} />
        <UserClass name={"Harendra(class)"} location={"Vizag class"} />
        </div>
   ) }
    
}
export default About;

/*

---Mounting----

Constructor(dummy)
Render(dummy)
    <HTML dummy>
componentdidmount
    API CALL
    setState(apidata)->state variable updated

    --UPDATE--

    render(API)
        <Html APi data>
    componentupdatemount


*/
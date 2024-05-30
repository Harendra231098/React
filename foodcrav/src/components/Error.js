import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err = useRouteError();
    return (
        <div>
            <h1>Error</h1>
            <h3>{err.status+" : "+err.statusText}</h3>
        </div>
    );
}
export default Error;

/*.header {
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
}
.logo {
     width: 150px;
}
.navbar>ul {
    display: flex;
    list-style-type: none;
    
}
.navbar>ul>li {
    padding: 10px;
    margin: 10px;  
}
.navbar>ul>button{
    margin: 10px; 
    border-radius: 25%;
}
.navbar>ul>button:hover{
    cursor:pointer;
    border:1px solid orange;
}
.res-container{
    display: flex;
    flex-wrap: wrap;
}
.shimmer-container{
    display: flex;
    flex-wrap: wrap;
}
.res-card{
    width: 200px;
    padding: 10px;
    margin:5px;
    background-color: #f0f0f0; 
    border-radius:10px;
   
}
.shimmer-card{
    width: 200px;
    padding: 10px;
    margin:5px;
    height: 300px;
    background-color: #f0f0f0; 
    border-radius:10px;
}

.res-card:hover{
    cursor: pointer;
    border: 1px solid black;
}

.res-logo {
    width: 100%;
    height: 45%;
    object-fit: cover;
    border-radius: 10px;
}
.filter-btn{
    margin: 10px;
    cursor: pointer;
}
.search-box{
    margin: 10px;
}
.search-filter{
    display: flex;
    justify-content: space-between;
}
.search-btn:hover{
    cursor: pointer;
}

 <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>{
                    const {id,name} = item?.card?.info;
                    return <li key={id}>{name}</li>
                })}
            </ul>

*/
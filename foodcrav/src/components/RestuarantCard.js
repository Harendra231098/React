import { CDN_URL } from "../utils/constants";

const RestuarantCard=({resdata})=>{

    const {cloudinaryImageId,name,cuisines,avgRating} = resdata?.info;
    const {deliveryTime} = resdata.info?.sla;
  return(
    <div className='res-card'>
      <img className='res-logo' 
        src={CDN_URL+cloudinaryImageId}
        alt='res-logo'
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating+" ratings"}</h4>
      <h4>{deliveryTime+" mins"}</h4>
    </div>
  );
  }

  export default RestuarantCard;
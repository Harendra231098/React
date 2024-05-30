import { CDN_URL } from "../utils/constants";

const RestuarantCard=({resdata,hm})=>{

    const {cloudinaryImageId,name,cuisines,avgRating} = resdata?.info;
    const {deliveryTime} = resdata.info?.sla;
  return(
    <div className='transition ease-in-out hover:scale-110 w-52 h-[22rem] p-2.5 m-2 rounded-xl bg-gray-100 border-2 shadow-lg'>
      {hm && hm}
      <img className='rounded-xl h-2/5 w-full object-cover' 
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

  //Higher Order Component
 //input-Restuarant=>Restuarant Promoted

 export const withPromotedLable = (RestuarantCard)=>{
   return (props)=>{
      return(
        <div>
          <label className="absolute bg-black opacity-70 text-white ml-5 mt-3 rounded-md p-1 ">Cheff Kiss</label>
          <RestuarantCard {...props} hm={<label className="absolute bg-black opacity-70 text-white rounded-md p-1 ">Cheff Kiss</label>} />
        </div>
      );
   }
 }

  export default RestuarantCard;
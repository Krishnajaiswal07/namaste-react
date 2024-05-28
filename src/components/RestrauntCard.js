import { CDN_URL } from "../utils/constant";

const RestrauntCard=(props)=>{
    const {resObj} = props;
    const {cloudinaryImageId,name,sla,cuisines,avgRating,locality}=resObj?.info
      return (
          <div  className="res-card">
              <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
              <div className="res-content">
            <h3>{name}</h3>
            <h4>{sla.slaString}</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h5>{locality}</h5>
            </div>
          </div>
        
      );
  };

  export default RestrauntCard;
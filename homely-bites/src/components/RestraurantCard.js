
const RestraurantCard = ({resDetail})=>{
    const {id,cloudinaryImageId,name,cuisines, costForTwo,avgRating} = resDetail?.info
    return(
      <div className="res-card">
        <img className="res-img" alt="food-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
        <h3>{name}</h3>
        <span>{cuisines.join(",")}</span>
        <div className="card-div">
          <div>{avgRating}</div>
          <div>27 MIN</div>
          <div>{costForTwo}</div>
        </div>
      </div>
    )
  }

  export default RestraurantCard
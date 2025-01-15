import RestraurantCard from './RestraurantCard'
import { ResData } from '../data/ResData'
import { useState } from 'react'


export const ResBody = ()=>{

    const [restaurantList, setRestaurantList] = useState(ResData)
    const [filterButtonString, setFilterButtonString] = useState("Top Rated Restarurant")
    let FilterbuttonFlag= true
    return(
      <div className="body">
        <div className="filter">
            <button className='filter-btn' onClick={()=>{
                if(FilterbuttonFlag){
                const filteredList = restaurantList.filter((res) => res.info.avgRating > 4.5)
                setRestaurantList(filteredList)
                setFilterButtonString("All Restarurant")
                }else{
                setRestaurantList(ResData)
                setFilterButtonString("Top Rated Restarurant")
                }
            }}>{filterButtonString}</button>
        </div>
        <div className="res-container">
          {restaurantList.map(ele =>(
            <RestraurantCard key={ele.info.id} resDetail = {ele}/>
          ))}
        </div>
      </div>
    )
  }
import RestrauntCard from "./RestrauntCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";



const Body=()=>{

const [listOfRestraunt ,setListOfRestraunt] = useState([]);
const [filteredRestraunt , setFilteredRestraunt]=useState([]);

const [searchText, setSearchText] = useState("");

useEffect(()=>{
    fetchData();
},[]);

 const fetchData = async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4348698&lng=80.3210489&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 };
    

    return listOfRestraunt.length===0 ? (<Shimmer/>):(
        <div className="body">
            <div className="filter">
                <div className="Search">
                    <input type="text" className="search-box"  value={searchText}  onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />

                    <button className="search-btn" onClick={()=>{
                       const filterRestraunt=listOfRestraunt.filter((res)=>(
                         res.info.name.toLowerCase().includes(searchText.toLowerCase())
                       ));
                       setFilteredRestraunt(filterRestraunt);
                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={()=>{
                    filteredList = listOfRestraunt.filter((res)=>res.info.avgRating>=4.5);
                    setFilteredRestraunt(filteredList);
                }}>Top Rated Restraunt</button></div>
            <div className="res-container">
                {filteredRestraunt.map((restraunt)=>(
                  <RestrauntCard  key={restraunt.info.id}  resObj={restraunt}/>   
                ))}
            </div>
        </div>
    );      
};

export default Body;
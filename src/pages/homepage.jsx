import React from "react";
import PictureShow from "../components/picture";
import  "../styles/style.css";


const Homepage = ()=>{
   
    return(
        <>
       <h1 class="h1f" >Image Gallery</h1>
     <div class="content">
      
        <PictureShow/>
  
    </div> </>)
}
Homepage();
export default Homepage;
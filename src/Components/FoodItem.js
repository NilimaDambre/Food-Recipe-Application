import React from "react";
//import './Components/style.css';
import './style.css';
const Mealitem=(getMeal)=>{
    console.log(getMeal.data)
    return(
        <>
             <div className="card">
                        <img src={getMeal.data.strMealThumb} alt="meal"/>
                        <div className ="info">
                        <h2>{getMeal.data.strMeal}</h2>
                        </div>
                        <div className ="recipe">
                            <h2>Recipe</h2>
                            <p>{getMeal.data.strInstructions}</p>
                            <img src={getMeal.data.strMealThumb} alt="img not found"/>
                            <a href={getMeal.data.strSource}>Watch video</a>
                        </div>
            </div>  
        </>
    )
}
export default Mealitem;
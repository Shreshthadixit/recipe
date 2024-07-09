import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
const SingleRecipe = () => {
    let location=useLocation()
    console.log(location)
    console.log(location.state)
    console.log(location.state.recipe)
    console.log(location.state.recipe.label)
  console.log(location.state.recipe.label.image)
  return (
    <div>
       <div className='row'>
            <div className='col-md-6 d-flex justify-content-center mt-3'>
             <img  className='img-fluid'src={location.state.recipe.image} alt=''></img>

            </div>

            <div className='col-md-6  mt-3 m-auto'>
             <h2> Title:{location.state.recipe.label}</h2>
              <h3>Meal type:{location.state.recipe.mealType}</h3>
                  <div className='col-md-6 '>
                    <div className='row d-flex justify-content-center gap-3'>
                      <div className='col-3 bg-warning'>
                        <p>{location.state.recipe.totalNutrients.CA.label}</p>
                        <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)}</p>
                    </div>
                    <div className='col-3 bg-warning'>
                        <p>{location.state.recipe.totalNutrients.FAT.label}</p>
                        <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)}</p>
                    </div>
                    <div className='col-3 bg-warning'>
                        <p>{location.state.recipe.totalNutrients.SUGAR.label}</p>
                        <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)}</p>
                    </div>
                    <div className='col-3 bg-warning'>
                        <p>{location.state.recipe.totalNutrients.PROCNT.label}</p>
                        <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)}</p>
                    </div>
                    </div>
                    <div className='text-center'>
                    <Link  to={location.state.recipe.url}className="btn btn-success mt-3 m-auto">How to prepare</Link>

                    </div>
                  </div>
                  </div>
                </div>
                  <div className='row'>
                  <div className='col-md-6 d-flex justify-content-center align-items-center flex-column  gap-4 mt-5'>
                    <h1>Health Labels</h1>

                    <h4>health</h4>
                    <ul>
                    {location.state.recipe.healthLabels.map((ele)=>{
                     return  <li>{ele}</li>
                     })}
                    </ul>
                  </div>
                  <div className='col-md-6  mt-5'>
                  <h1>Ingredients</h1>
                  <ul>
                    {location.state.recipe.ingredientLines.map((ele)=>{
                     return  <li>{ele}</li>
                     })}
                    </ul>
                  </div>
            </div>

          </div>
          
      
  )
}

export default SingleRecipe

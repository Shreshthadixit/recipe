import React, { useEffect, useRef, useState } from 'react'
// import Navbar from '../common/Navbar'
import { Link } from 'react-router-dom'
const Home = () => {
  let inputRef= useRef()
  const [searchValue, searchAllValue]=useState("pizza")
  const[allFood,setallFood]=useState([])
  console.log(allFood)
  let getData=async()=>{
    let res=await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=44a38d5b&app_key=bfc447410e951458c8d37ba6e6832c26`)
     let data=await res.json();
    //  console.log(data.hits)
    setallFood(data.hits)

  }
  useEffect(()=>{
    getData();
  },[searchValue])
       function  handaleClick(e){
        e.preventDefault()
        let   value= inputRef.current.value
        searchAllValue(value)
           console.log(value)
       }
  return (

    <div className='row d-flex justify-content-center gap-4'>      
    <div className='div'>
      <input ref={inputRef} className='input' type="text" placeholder='search' />
      <button onClick={handaleClick} className='button'>Search</button>
    </div>
        {/* <Navbar/> */}
         {allFood.map((ele)=>{
          return<div key={ele.recipe.url} className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image}className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.label}</h5>
    <Link state={ele} to="/Single" className="btn btn-primary">View recipe</Link>
    {/* <button onClick={()=>handaleSearch(ele)}>Clickme</button> */}
  </div>
</div>

        })}

    </div>
  )
}

export default Home

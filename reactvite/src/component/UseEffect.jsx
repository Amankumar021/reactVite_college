import React, { useEffect, useState } from 'react'

function UseEffect() {
   const [count,setCount]=useState(0);
  const[pointer,setPointer]=useState(1000)
  const[product,setProduct]=useState([]);

useEffect(()=>{
    // console.log("Hey...using useEffect hook, count="+count)
    // console.log("Hey...using useEffect hook, pointer="+pointer)

   async function fetchData(){
        try{
             const data=await fetch('https://fakestoreapi.com/products');
              const jsonData=await data.json();
              console.log(jsonData)
              setProduct(jsonData);
            }catch(e){
              console.log("Error is:"+e)
        }
    }

    fetchData();
},[])

  return (
    <div>UseEffect
      <h2 style={{color:'red'}}>count={count}</h2>
      <h2 style={{color:'green'}}>pointer={pointer}</h2>
      <div>
        {JSON.stringify(product)}
      </div>

<button onClick={()=>setCount(count+10)}>Counter</button>

    </div>
  )
}

export default UseEffect
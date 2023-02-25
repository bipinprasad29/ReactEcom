import React from 'react'
import './rating.css'


const Rating = ({rating}) => {
   

  const ratingStar =  Array.from({length: 5},(elm,index)=>{
   let number = index + 0.8
   return (<span className='starContainer' key={index}>{rating >= index +1 || number < rating ?<i class="fa-solid fa-star ricon" ></i>:
   index < rating && rating <= number?<i class="fa-regular fa-star-half-stroke ricon"></i>:
   <i class="fa-regular fa-star eicon"></i>}</span>)
   })

return(
<span className="ratingContainer">
    {ratingStar}
</span>
)   

}

export default Rating
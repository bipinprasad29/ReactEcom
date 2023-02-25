import { useContext, useState} from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../ContextApi/CartContext";
import './singleproduct.css'
import { useNavigate } from "react-router-dom";
import Rating from "../rating/rating";

function Product() {
  const {singleItem,itemInCart,addBtnClickHandler,itemRemover} = useContext(CartContext);



 const navigate = useNavigate() 
  return (
    <>
      {singleItem.length > 0 &&
        <div className="singleproduct">
          <img src={singleItem[0].image} alt="" />
          <ul className="prodesc">
            <li><h1>Product Details</h1></li><hr />
            <li>Category - {singleItem[0].category.toUpperCase()}</li>

            <li> Color - {singleItem[0].color.toUpperCase()}</li>

            <li>Product - {singleItem[0].name}</li>

            <li>No. item left in stock - {singleItem[0].stocks}</li>

            <li>Rating -<Rating rating = {singleItem[0].rating}/> {singleItem[0].rating}/ <span>{singleItem[0].review} reviews</span></li>
            

           

          <li>Price - ${singleItem[0].price}</li>
          {singleItem[0].stocks === 0?<li>Sold-Out</li>:
          
          <li>

            {!(itemInCart.find((e) => e.id === singleItem[0].id))?
            <Button onClick={()=>addBtnClickHandler(singleItem[0])}>Add To Cart</Button>: 

            <Button style={{backgroundColor:'grey', border:'none'}} onClick={()=>itemRemover(singleItem[0])}>Remove</Button>}</li>}

            <li><Button onClick={()=>navigate(-1)}> Back</Button></li>
          </ul>
        </div>}

    </>
  );
}

export default Product;

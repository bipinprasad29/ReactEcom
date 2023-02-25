import { CartContext } from "../../ContextApi/CartContext"
import { useContext } from "react"
import "./cart-item.css"
import Rating from "../rating/rating";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { itemInCart, itemRemover } = useContext(CartContext);
  const navigate = useNavigate() 

  return (
    <>
      {itemInCart.map((e) => {
        return (
          <div className="cartItem" key={e.id}>
            <div className="cart__item__image">
              <img src={e.image} alt="" />
            </div>
            <ul>
              <li>Name -{e.name}</li>
              <li>Category -{e.category}</li>
              <li>Color -{e.color}</li>
              <li>Stock -{e.stocks}</li>
              <li>Rating - <Rating rating={e.rating}/></li>
              <li>Price -${e.price}</li>
            </ul>

            <div className="removebtn" onClick={() => itemRemover(e)}>
              Remove
            </div>
          </div>
        );
      })}
      <div className="total">
        Your Grand Total is -$
        {itemInCart.reduce((acc, cur) => acc + Number(cur.price), 0)}
      </div>
      <Button onClick={()=>navigate(-1)}>Go Back</Button>
    </>
  )
}

export default Cart;

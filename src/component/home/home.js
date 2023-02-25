import React, { useContext,useState } from "react";
import Filter from "../filter/filter";
import { CartContext } from "../../ContextApi/CartContext";
import { DataContext } from "../../ContextApi/DataContext";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination/pagination";
import Rating from "../rating/rating";
import './home.css'

const Home = () => {
  
  const {
    itemInCart,
    setSingleItem,
    itemRemover,
    addBtnClickHandler
  } = useContext(CartContext);

  const [page, setPage] = useState(1)

  const navigate = useNavigate();

 const {data}= useContext(DataContext)
 
 const noOfPage =Math.ceil(data.length/10)


  return (
  <>  <div className="home__container"><Filter />
    <div className="feature__product__pagination">

    {data.length > 0? <div className="feature__product">
      {(data.length<10?data:data.slice(10*page -10 , 10*page)).map((elm) => {
       
        return (
          <div className="product" key={elm.id}>
            <img
              src={elm.image}
              alt=""
              onClick={() => {
                setSingleItem(() =>[elm])
                navigate('/product');
              }}
            />
            <ul className="prodesc">
              <li className="rating"><Rating  rating={elm.rating}/>{elm.review}Reviews</li>
              <li className="price">${elm.price}</li>
              {elm.stocks?
                (!(itemInCart.find((e) => e.id === elm.id))?<li
                  className="addbtn"
                  id={elm.id}
                  onClick={() => addBtnClickHandler(elm)}
                >
                  Add to Cart
                </li>: <li className="addbtn"
                  id={elm.id} style={{backgroundColor:'grey'}}
                  onClick={() => itemRemover(elm)}
                >
                  Remove
                </li>):''
              }
            </ul>
            {elm.stocks === 0 && <div className="soldOut">SOLD OUT</div>}
          </div>
        )
      })}</div>: <div style={{textAlign: 'center', fontSize: 24, marginTop: 10 }}>sorry there is no item matching your search</div>}

    
    <Pagination page={page} noOfPage={noOfPage} setPage={setPage}/>
   </div>
  
   </div>
   </>
  );
};

export default Home;

import "./App.css";
import { lazy, Suspense } from "react";
import Header from "./component/navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./component/Error";
const Home =lazy(()=>import ("./component/home/home"))
const Cart =lazy(()=>import ("./component/cartItem/cartItem"))
const Product =lazy(()=>import ("./component/singleproduct/singleproduct"))


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="maindisplay">
        
          <div>
          <Suspense fallback='Loading...'>
           <Routes>
          
             <Route exact path={"/"} element={<Home />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/product" element={<Product />} />
              <Route path="*" element={<Error />} />
            </Routes>
            </Suspense>
          
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";

import Cart from "./component/cartItem/cartItem";
import Product from "./component/singleproduct/singleproduct";
import Header from "./component/navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home/home";
import Error from "./component/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="maindisplay">
        
          <div>
            <Routes>
              <Route exact path={"/"} element={<Home />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/product" element={<Product />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

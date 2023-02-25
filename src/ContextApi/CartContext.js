import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [addCart, setAddCart] = useState(0);
  const [singleItem, setSingleItem] = useState([]);
  const [itemInCart, setItemInCart] = useState([])
  
  
  const itemRemover = (e) => {
    setAddCart((prev) => prev - 1);
    setItemInCart(() => itemInCart.filter((item) => item.id !== e.id));
  };


  const addBtnClickHandler = (arg) => {
    let clickedItem = itemInCart.find((e) => e.id === arg.id);
    if (!clickedItem) {
      setAddCart((previous) => previous + 1);
      setItemInCart(() => [...itemInCart, arg]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addCart,
        setAddCart,
        itemInCart,
        setItemInCart,
        singleItem,
        setSingleItem,
        itemRemover,
        addBtnClickHandler
      }}
    > {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

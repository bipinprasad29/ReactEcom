import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap/";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../ContextApi/CartContext";
import { DataContext } from "../../ContextApi/DataContext";
import { useContext } from "react";
import "./navbar.css";

const Header = () => {
  const { addCart, itemInCart, itemRemover } = useContext(CartContext);
  const { Data, data, setData } = useContext(DataContext);
  const navigate = useNavigate();

  const searchChange = (e) => {
    if (e.target.value) {
      const newData = data.filter(
        (elm) =>
          elm.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          elm.category.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(() => newData);
    } else {
      setData(() => Data);
    }
  };

  return (
    <Navbar className="header" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          Shopping-Website
        </Navbar.Brand>

        <Navbar.Text className="search">
          <FormControl
            onChange={(e) => searchChange(e)}
            className="m-auto searchbar"
            placeholder="Search Here"
          />
        </Navbar.Text>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart color="white" fontSize="25px" />
            {addCart > 0 && <Badge>{addCart}</Badge>}
          </Dropdown.Toggle>
          {addCart > 0 && (
            <Dropdown.Menu className="dropDown">
              {itemInCart.map((el) => {
                return (
                  <div className="dropDownItem" key={el.id}>
                    <img className="dropDownImage" src={el.image} alt="" />
                    <span className="crossIcon" onClick={() => itemRemover(el)}>
                      ❌
                    </span>
                  </div>
                );
              })}
              {addCart ? (
                <Button
                  className="dropButton"
                  onClick={() => navigate("/cart")}
                >
                  Go To Cart
                </Button>
              ) : (
                " "
              )}
            </Dropdown.Menu>
          )}
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import { useStateValue } from "../StateProvider";

import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  // console.log('CheckOut Page>>>', basket);

  const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => item.price + amount, 0);

  const removeFromBasket = (e, id) => {
    e.preventDefault();

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <Container>
      <Navbar />
      <Main>
        <ShoppingCart>
          <h2>Shopping Cart</h2>

          {basket?.map((product) => (
            <Product>
              <Image>
                <img src={product.image} alt="" />
              </Image>
              <Description>
                <h4>{product.title}</h4>
                <p>₹ {product.price} /-</p>
                <button onClick={(e) => removeFromBasket(e, product.id)}>
                  Remove
                </button>
              </Description>
            </Product>
          ))}

          {/* <Product>
            <Image>
              <img
                src="https://m.media-amazon.com/images/I/51SqCroHfNL._SX522_.jpg"
                alt=""
              />
            </Image>
            <Description>
              <h4>ZEBRONICS HAV01 HDMI</h4>
              <p>₹ 5,000/-</p>
              <button>Remove</button>
            </Description>
          </Product> */}
        </ShoppingCart>
        <Subtotal>
          <p>
            Subtotal ({basket.length} items) :
            <strong> ₹ {getBasketTotal(basket)} /- </strong>
          </p>

          <button onClick={() => navigate("/Address")}>
            Proceed to Checkout
          </button>
        </Subtotal>
      </Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin: auto;
  background-color: rgb(234, 237, 237);

  position: relative;
`;

const Main = styled.div`
  display: flex;
  padding: 15px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ShoppingCart = styled.div`
  background-color: #fff;
  flex: 0.7;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  @media only screen and (max-width: 1200px) {
    flex: none;
  }

  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const Subtotal = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  background-color: #fff;
  flex: 0.3;
  margin-left: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }

  p {
    font-size: 20opx;
  }

  button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    background-color: #ffd814;
    border: none;
    outline: none;
    border-radius: 8px;
    font-weight: 200;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

    &:hover {
      background-color: white;
      border: 1px solid #ffd814;
    }
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  flex: 0.3;

  img {
    width: 95%;
  }
`;

const Description = styled.div`
  flex: 0.7;
  margin-left: 30px;

  h4 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-weight: 600;
    margin-top: 10px;
  }

  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Checkout;

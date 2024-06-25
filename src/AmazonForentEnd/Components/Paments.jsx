import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useStateValue } from "../StateProvider";

import {
  CardElement,
  useElements,
  useStripe,
  clientSecret,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

function Paments() {
  const navigate = useNavigate();

  const [{ address, basket }, dispath] = useStateValue();
  const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => item.price + amount, 0);

  // I ahve use pament method
  const elements = useElements();
  const stripe = useStripe();

  return (
    <Container>
      <Navbar />

      <Main>
        <ReviewContainer>
          <h2>Review Your Order</h2>

          <AddressContainer>
            <h5>Shopping Address</h5>

            <div>
              <p style={{ fontSize: "18px" }}>{address.fullname}</p>

              <p>{address.flat}</p>
              <p>{address.area}</p>
              <p>{address.landmark}</p>
              <p>{address.city}</p>
              <p>{address.state}</p>

              <p>{address.phone}</p>
            </div>
          </AddressContainer>

          <PaymentContainer>
            <h5>Payment Method</h5>

            <div>
              <p>Card Details</p>
              {/* Card Ekement */}

              <CardElement />
            </div>
          </PaymentContainer>

          <OrderContainer>
            <h5>Your Order</h5>

            <div>
              {basket?.map((product) => (
                <Product>
                  <Image>
                    <img src={product.image} alt="" />
                  </Image>
                  <Description>
                    <h4>{product.title}</h4>
                    <p>₹ {product.price}</p>
                  </Description>
                </Product>
              ))}
            </div>
          </OrderContainer>
        </ReviewContainer>

        <SubTotal>
          <p>
            Subtotal ({basket.length} items) :
            <strong> ₹ {getBasketTotal(basket)} /- </strong>
          </p>

          <button>Proceed to Checkout</button>
        </SubTotal>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: rgb(237, 237, 237);
`;

const Main = styled.div`
    padding: 15px;
    display: flex;

    @
     only screen and (max-width:1200px) {
        flex-direction: column;
          
      } 

`;

const ReviewContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  background-color: #fff;
  flex: 0.7;
  padding: 15px;

  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const SubTotal = styled.div`
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
  }
`;

const AddressContainer = styled.div`
  margin-top: 20px;

  line-height: 6px;

  div {
    margin-top: 10px;
    margin-left: 10px;
  }

  p {
    font-size: 14px;
    margin-top: 4px;
  }
`;

const PaymentContainer = styled.div`
  margin-top: 15px;

  div {
    margin-top: 15px;
    margin-left: 15px;

    h5 {
      font-weight: 600;
    }

    p {
      font-size: 14px;
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
`;

const OrderContainer = styled.div`
  margin-top: 40px;
`;
export default Paments;

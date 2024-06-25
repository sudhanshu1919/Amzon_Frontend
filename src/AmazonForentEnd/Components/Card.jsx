import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

function Card({ id, image, price, title }) {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("Basket",basket)

  const addToBasket = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        image,
      },
    });
  };

  return (
    <Container>
      <Image>
        <img src={image} alt="" />
      </Image>

      <Description>
        <h5>{title}</h5>
        <p style={{ marginTop: "-30px" }}>₹ {price} /-</p>
        <button onClick={addToBasket}>Add to cart</button>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;

  img {
    width: 180px;
    height: 200px;
  }
`;

const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 15px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #ffd814;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: white;
      border: 1px solid #ffd814;
    }
  }
`;

export default Card;

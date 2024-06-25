import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
// Banner containe images
import Banners from "./Banners";
import off1 from "../Images/OfferImages/off1.jpg";
import Card from "./Card";
import axios from "../axios.js";

function Home() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://amzon-backend-ki9v.onrender.com/products/get"
        );

        //console.log('Data:', response.data);

        setProducts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Navbar />

      <Banner>
        <Banners />
      </Banner>

      <Main>
        {products &&
          products?.map((product) => (
            <Card
              id={product._id}
              image={product.imageURL}
              price={product.price}
              title={product.title}
            />
          ))}
      </Main>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;

  background-color: rgb(234, 237, 237);
`;

const Banner = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  /* Mobile - 1 screen responsive */
  @media only screen and (max-width: 412px) {
    grid-template-columns: repeat(2, 30%);
    grid-gap: 0;
    padding: 10px;
  }

  /* Mobile - 2 screen responsive */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
    padding: 10px;
  }

  /* Tablets screen responsive */
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;

export default Home;

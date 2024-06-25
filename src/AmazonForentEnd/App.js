import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout";
import Address from "./Components/Address";
import Signup from "./Components/Signup";
import AddProduct from "./Components/AddProduct";
import Paments from "./Components/Paments";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51NsQzNSI007c7kaQdGSgb3gxJa0azKu0dUFx7PaUFQeFHNx08ljDvRvXmu48llA42ZtSYQTPFrW4KwAsD3qBYNLA00tnDejfbf"
);

function App() {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <BrowserRouter>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Address" element={<Address />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/AddProduct" element={<AddProduct />} />

              <Route
                path="/Paments"
                element={
                  <Elements stripe={promise}>
                    {" "}
                    <Paments />{" "}
                  </Elements>
                }
              />

              {/* <Route path="Account" element={<Account/>}/>
                            <Route path="Nopage" element={<Nopage />} /> */}
            </Routes>
          </Container>
        </BrowserRouter>
      </StateProvider>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
`;

export default App;

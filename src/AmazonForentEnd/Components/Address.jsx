import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

function Address() {
  const [{}, dispatch] = useStateValue();

  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [flat, setFlat] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();

  const deliver = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_ADDRESS",
      item: {
        fullname,
        phone,
        flat,
        area,
        landmark,
        city,
        state,
      },
    });

    navigate("/Paments");
  };

  return (
    <Container>
      <Navbar />

      <Main>
        <FormContainer>
          <InputContainer>
            <p>Full Name</p>
            <input
              type="text"
              placeholder="Sudhanshu Gaikwad"
              onChange={(e) => setFullName(e.target.value)}
              value={fullname}
            />
          </InputContainer>

          <InputContainer>
            <p>Phone Number</p>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </InputContainer>

          <InputContainer>
            <p>Flat , House Number</p>
            <input
              type="text"
              onChange={(e) => setFlat(e.target.value)}
              value={flat}
            />
          </InputContainer>

          <InputContainer>
            <p>Area , Colony</p>
            <input
              type="text"
              onChange={(e) => setArea(e.target.value)}
              value={area}
            />
          </InputContainer>

          <InputContainer>
            <p>Landmark</p>
            <input
              type="text"
              onChange={(e) => setLandmark(e.target.value)}
              value={landmark}
            />
          </InputContainer>

          <InputContainer>
            <p>town / City</p>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </InputContainer>

          <InputContainer>
            <p>State</p>
            <input
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </InputContainer>

          <button onClick={deliver}> Deliver To this Address</button>
        </FormContainer>
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

const Main = styled.form`
  padding: 15px;
`;

const FormContainer = styled.form`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border: 1px solid lightgray;
  width: 55%;
  min-width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #fff;
  margin: auto;

  button {
    align-self: flex-start;
    height: 33px;
    width: 250px;
    margin-top: 20px;
    background-color: #ffa32a;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

export default Address;

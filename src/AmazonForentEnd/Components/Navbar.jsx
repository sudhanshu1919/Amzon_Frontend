import React from "react";
import styled from "styled-components";
import ICON2 from "../Images/Logo2.png";
import SearchIcon2 from "../Images/searchicon.png";
import Basket from "../Images/ICONAMAZON.png";
import AddProduct from "./AddProduct";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
function Navbar() {
  // This is for navigate anthoer page
  const navigate = useNavigate();

  const [{ basket }] = useStateValue();

  return (
    <Container>
      <Inner>
        <Logo>
          <Link to="/">
            <img src={ICON2} alt="icon" />
          </Link>
        </Logo>

        <SearchBar>
          <input type="text" placeholder="Search..." />
          <SearchIcon>
            <img
              src={SearchIcon2}
              alt="icon"
              onClick={() => navigate("/AddProduct")}
            />
          </SearchIcon>
        </SearchBar>

        <RightContainer>
          <NavButton>
            <p>Sudhanshu</p>
          </NavButton>

          <NavButton onClick={() => navigate("/Login")}>
            <p>Login</p>
          </NavButton>

          <BasketButton onClick={() => navigate("/Checkout")}>
            <img src={Basket} alt="icon" />
            <p> {basket.length} </p>
          </BasketButton>
        </RightContainer>
      </Inner>

      {/* It is use for only mobile  */}

      <MobileSearchBar>
        <input type="text" placeholder="Search..." />
        <SearchIcon>
          <img
            src={SearchIcon2}
            alt="icon"
            onClick={() => navigate("/AddProduct")}
          />
        </SearchIcon>
      </MobileSearchBar>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;

  position: relative;

  @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;
  }
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;

  img {
    width: 100px;
    margin-top: 10px;
  }
`;

const SearchBar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 5px;
    }
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const MobileSearchBar = styled.div`
  width: 100%;
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;
  padding: 10px;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 5px;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  background-color: #febd69;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;

  img {
    width: 22px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
`;

const NavButton = styled.div`
  color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
  line-height: 2px;

  p {
    &:nth-child(1) {
      font-size: 12px;
    }
    &:nth-child(2) {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const BasketButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;

  img {
    width: 30px;
    margin-right: 6px;
  }

  p {
    margin-top: 15px;
    color: #fff;
    font-weight: 500;
  }
`;

export default Navbar;

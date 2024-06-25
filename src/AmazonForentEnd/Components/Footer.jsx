import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Container>
      <p>© 2024 - Amazon.com</p>

      <Name>Created by Sudhanshu Gaikwad</Name>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 30px;
  background-color: #131921;
  display: flex;
  align-items: center;
  position: relative;
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-weight: 300;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: #fff;
  }
`;

const Name = styled.span`
  font-weight: 500;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #fff;
  margin-top: -10px;
`;
export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        {/* <img src="./images/logo.png" alt="my logo img" /> */}
        <h2>@Nagesh</h2>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  h2{
    color:#6c5ce7;
    font-size:50px;
    font-family:bold;
    font-weight:800;

  }

  .logo {
    height: 5rem;
  }
`;
export default Header;

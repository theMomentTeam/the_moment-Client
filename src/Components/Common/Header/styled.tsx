import styled from "styled-components";
import device from "Constants/reactive";

interface NavBar {
  active: boolean;
}

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 23px 15vw;
  width: 70vw;
  background: white;
  z-index: 1;
  @media ${device.mobile} {
    width: 90vw;
    padding: 0 5vw;
  }
  @media screen and (max-width: 1230px) {
    flex-direction: column;
    align-items: flex-start;
  }
  & > a {
    & > span {
      @media screen and (max-width: 1600px) {
        display: none;
      }
      color: #434c9c;
      font-weight: 600;
      font-size: 22px;
      position: relative;
      top: -10px;
      margin: 21px;
    }
  }
`;

export const Logo = styled.h1`
  display: inline-block;
  border-right: 2px solid #434c9c;
  padding-right: 21px;
  @media screen and (max-width: 1600px) {
    border: none;
  }
`;

export const HeaderNav = styled.nav<NavBar>`
  display: flex;
  justify-content: space-between;
  align-item: center;
  @media screen and (max-width: 1230px) {
    flex-direction: column;
    align-items: flex-start;
    display: ${props => props.active ? "none" : "flex"}
  }
  & > a {
    display: inline-block;
    margin: 36px 44px;
    @media screen and (max-width: 1230px) {
      margin: 24px 0;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
  & > a:last-child {
    margin-right: 0;
  }
  & > button {
    display: inline-block;
    margin: 36px;
    padding: 0;
    background: none;
    text-decoration: none;
    color: #434C9C;
    font-size: 1rem;
    @media screen and (max-width: 1230px) {
      margin: 24px 0;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;

export const BarWrapper = styled.div`
   @media screen and (min-width: 1230px) {
     display: none;
   }
   & > svg {
     z-index: 2;
     font-size: 32px;
     color: #434c9c;
     position: absolute;
     top: 52px;
     right: 15%;
    @media ${device.mobile} {
      top: 29px;
      right: 5vw;
    }
   }
 `

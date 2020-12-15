import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby"
import posed from "react-pose";

const BottomWrapper = styled.div`
  position: fixed;
  height: 60px;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`


const BtnWrapper = styled(Link)`
  text-align: center;
  display: block;
  margin: auto;
  background: #c41c00;
  color: white;
  text-decoration: none;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`

export const Footer = ({ children, to, icon }) => {
  const Box = posed.div({
    hoverable: true,
    init: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      borderRadius: "50%",
      justifyContent: "center",
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
      borderRadius: "50%",
      justifyContent: "center",
    }
  });

  return (
    <BottomWrapper>
      <BtnWrapper to={to}><Box><i className={`fas ${icon} fa-2x`}></i></Box></BtnWrapper>
    </BottomWrapper>
  );

}

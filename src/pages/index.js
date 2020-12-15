import React from "react"
import Christoph from "../../images/chu_circ.png"
import styled from 'styled-components'
import "../styles/global.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/js/all.js';
import { Footer } from "../components/Footer"
import posed from "react-pose";
import { Helmet } from 'react-helmet';

const Middle = styled.div`
  margin: auto;
  height: 200px;
  display: flex;
  background: #eaeaea;
  border-color: #eee;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
  overflow: hidden;
`

const Row = styled.div`
  margin: 0px auto;
  overflow: hidden;
`

const IconCard = styled.div`
  height: 200px;
  width: 200px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChristophCard = styled.div`
  height: 200px;
  width: 200px;
  padding: 0px;
  margin: 0px;
  float: left;
  text-align: center;
  display:table-cell;
  justify-content: center;

&:hover {
cursor: pointer;
}
`

export default function Home() {
    const Box = posed.div({
        hoverable: true,
        init: {
            scale: 1,
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            borderRadius: "50%",
        },
        hover: {
            scale: 1.2,
            boxShadow: "0px 10px 15px rgba(0,0,0,0.3)",
            borderRadius: "50%",
        }
    });

    return <>
               <Helmet>
                   <title>Familie Uhlich</title>
               </Helmet>
               <Middle>
                   <Row>
                       <IconCard>
                           <i className="fas fa-user-nurse fa-4x"></i>
                       </IconCard>
                       <ChristophCard>
                           <Box><img src={Christoph} alt="Christoph" onClick={() => { window.location='http://christoph.familie-uhlich.de';}}/></Box>
                       </ChristophCard>
                       <IconCard>
                           <i className="fas fa-user fa-4x"></i>
                       </IconCard>
                       <IconCard>
                           <i className="fas fa-user-astronaut fa-4x"></i>
                       </IconCard>
                       <IconCard>
                           <i className="fas fa-user-ninja fa-4x"></i>
                       </IconCard>
                       <IconCard>
                           <i className="fas fa-user-tie fa-4x"></i>
                       </IconCard>
                   </Row>
               </Middle>
               <Footer to="/imprint" icon="fa-info"/>
           </>
}

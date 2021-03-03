import React from "react";
import css from "./style.module.css"
import { Container } from 'react-bootstrap';
import NavBar from "../components/Navigation";
import CdvComponent from "../components/CdvComponent";
import PopUp from "../components/ResultView/AlertPopUp";

const PopPage = () => {
    return (<>
  
      <Container className={css.body}>
          <NavBar />
          <PopUp />
          <CdvComponent />
      </Container>
      
    </>);
  };
  
  export default PopPage;
  
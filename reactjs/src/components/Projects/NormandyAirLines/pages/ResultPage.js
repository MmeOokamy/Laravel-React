import React from "react";
import css from "./style.module.css"
import { Container } from 'react-bootstrap';
import NavBar from "../components/Navigation";
import CdvComponent from "../components/CdvComponent";
import Result from "../components/ResultView";

const ResultPage = () => {
    return (<>
  
      <Container className={css.body}>
          <NavBar />
          <Result />
          <CdvComponent />
      </Container>
      
    </>);
  };
  
  export default ResultPage;
  
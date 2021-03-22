import React from "react";
import css from "./style.module.css"
import { Container } from 'react-bootstrap';
import NavBar from "../components/Navigation";
import CdvComponent from "../components/CdvComponent";
import Reservation from "../components/ReservationView";

const ReservationPage = () => {
    return (<>
  
      <Container className={css.body}>
          <NavBar />
          <Reservation />
          <CdvComponent />
      </Container>
      
    </>);
  };
  
  export default ReservationPage;
  
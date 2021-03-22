import React from "react";
import css from "./style.module.css"
import { Container } from 'react-bootstrap';
import NavBar from "../components/Navigation";
import CdvComponent from "../components/CdvComponent";
import Profile from "../components/ProfileView";

const ProfilePage = () => {
    return (<>
  
      <Container className={css.body}>
          <NavBar />
          <Profile />
          <CdvComponent />
      </Container>
      
    </>);
  };
  
  export default ProfilePage;
  
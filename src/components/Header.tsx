import React from "react";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";
import { Button } from "./Button";
import logo from "../assets/logo-full.svg";
import { useNavigate } from "react-router-dom";
import { IHeader } from "./types";


const Header = ({auth}:IHeader) => {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/login')
  }

  const handleClickHome = () => {
    navigate('/')
  }

  const handleClickRegister = () => {
    navigate('/register')
  }
  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <img src={logo} alt="Logo da DIO" onClick={handleClickHome} />
            { auth ? (
              <>
                <BuscarInputContainer>
                  <Input placeholder="Buscar" />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
              </>
             ): null }
            <Menu>Global</Menu>
          </Row>
          <Row>
          {auth ? (
              <UserPicture src="https://avatars.githubusercontent.com/u/127142261?v=4" />
            ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" onClick={handleClickSignIn} />
                <Button title="Cadastrar" onClick={handleClickRegister} />
              </>
            )}
          </Row>
        </Container>
      </Wrapper>
        

        
      
    </>
  );
};

export { Header };

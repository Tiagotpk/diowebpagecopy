import React from "react";
import {
  BuscarInputContainer,
  Column,
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
const Header = ({auth}) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <img src={logo} alt="Logo da DIO" />
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
                <MenuRight href="a">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>
            )}
          </Row>
        </Container>
      </Wrapper>
        

        
      
    </>
  );
};

export { Header };

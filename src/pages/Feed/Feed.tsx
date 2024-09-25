import React from "react";
import { Container, Column, Title, TitleHighLight } from "./styles";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header auth={true} />
      <Container>
        <Column flex={3}>
          <Title></Title>
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
          <UserInfo
            percentual={92}
            name="Tiago Reis"
            image="https://avatars.githubusercontent.com/u/127142261?v=4"
          />
          <UserInfo
            percentual={72}
            name="Tiago Reis"
            image="https://avatars.githubusercontent.com/u/127142261?v=4"
          />
          <UserInfo
            percentual={62}
            name="Tiago Reis"
            image="https://avatars.githubusercontent.com/u/127142261?v=4"
          />
          <UserInfo
            percentual={52}
            name="Tiago Reis"
            image="https://avatars.githubusercontent.com/u/127142261?v=4"
          />
          <UserInfo
            percentual={42}
            name="Tiago Reis"
            image="https://avatars.githubusercontent.com/u/127142261?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };

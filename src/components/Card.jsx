import React from "react";
import { IoMdFlame } from "react-icons/io";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://media.licdn.com/dms/image/v2/D4D16AQFJXy4-Z8jHpg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1676733586099?e=1732752000&v=beta&t=i-8xXntD70ZM-aEgd-pgdphhe8413Xw1-zw-0VRMxoQ" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/127142261?v=4" />
          <div>
            <h4>Tiago Reis</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para o curso de HTML, CSS e JavaScript</h4>
          <p>
            Projeto feito na formação de JavaScript no Bootcamp XPInc da DIO...{" "}
            <strong>Saiba mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JAVASCRIPT</h4>
          <p>
            <IoMdFlame /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };

import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background: #565656;
  border-radius: 22px;
  position: relative;

  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 167px;
      height: 33px;

      background: #e4105d;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 47px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuscarInputContainer = styled.div`
  width: 175px;
  height: 30px;
  background: #2d2d37;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.a`
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #fff;
  margin-right: 12px;
  text-decoration: none;
`;

export const MenuRight = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #fff;
  margin-right: 12px;
  text-decoration: none;
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 2px solid #000;
`;

export const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  color: #fff;
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  height: 30px;
  border-bottom: 1px solid #3b3450;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;

export const InputText = styled.input`
  background-color: transparent;
  color: #fff;
  width: 100%;
  border: 0;
  height: 30px;
`;

export const CardContainer = styled.div`
  width: 100%;
  background-color: #3b4651;
  position: relative;
  margin-bottom: 24px;
`
export const ImageBackground = styled.img`
  width: 100%;
  height: 180px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  div{
    margin-left: 12px;
  }

  h4{
    font-weight: 700;
    font-size: 18px;
    line-height:25px;
    color: #fff
  }

  p{
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }

`

export const PostInfo = styled.div`
  margin-bottom: 12px;

  h4{
    font-weight: 700;
    font-size: 18px;
    line-height:25px;
    color: #fff
  }
  
  p{
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`

export const HasInfo = styled.div`
  margin-top: 12px;

  h4{
    font-weight: 700;
    font-size: 12px;
    line-height:16px;
    color: #ffffff80
  }

  p{
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`
export const NameText = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height:25px;
    color: #fff

`

export const Progress = styled.div`
  width: 180px;
  height: 6px;
  background-color: #fff;
  border-radius: 3px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({percentual}) => percentual}%;
    height: 6px;
    border-radius: 3px;
    background-color: #23d07A
  }
`
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px
`;
import styled from "styled-components";
import { IColumn } from "./types";

export const Container  = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`
export const Title = styled.h3`
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #fff;
`

export const TitleHighLight = styled.h3`
  color: #FFFFFF60;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 24px;

`
export const Column = styled.div<IColumn>`
  flex:${({flex}) => flex};
  padding-right: 24px;
`

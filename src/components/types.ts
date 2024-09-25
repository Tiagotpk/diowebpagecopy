import React from "react";

export interface IButton {
  title: string;
  variant?: string;
  onClick?: () => void;
  type?: string;
}

export interface IButtonStyled {
  variant: string;
}

export interface IHeader {
  auth?: boolean;
}

export interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  leftIcon?: React.ReactNode;
  name: string;
  errorMessage?: string;
  control: any;
}

export interface IUserInfo {
  name: string;
  image?: string;
  percentual: number;
}

export interface IUserInfoStyle {
  percentual: number;
}


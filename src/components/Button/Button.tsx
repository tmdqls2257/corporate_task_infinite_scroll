import styled from "@emotion/styled";
import React from "react";

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

const CustomButton = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ onClick, children }: ButtonProps) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
};

export default Button;

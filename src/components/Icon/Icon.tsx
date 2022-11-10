import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  width: 16px;
  padding: 0 8px;
  display: flex;
  align-items: center;
`;

type IconBoxProps = {
  id?: string;
  style?: string;
  iconName: IconType;
  // onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
};

export enum IconType {
  search = "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  adjustments = "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75",
}

const Icon = ({ iconName, onClick }: IconBoxProps) => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={onClick}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={iconName} />
      </svg>
    </Container>
  );
};

export default Icon;

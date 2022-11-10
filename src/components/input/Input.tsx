import styled from "@emotion/styled";
import { FieldValues, Path, UseFormRegister } from "react-hook-form/dist/types";

type InputProps = {
  register: UseFormRegister<any>;
  label: Path<any>;
  required: boolean;
};

const CustomInput = styled.input`
  font-size: 1rem;
  border-radius: 4px;
  font-weight: bold;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Input = ({ register, label, required }: InputProps) => {
  return (
    <CustomInput
      {...register(label, { required })}
      placeholder={"검색어를 입력하세요"}
    ></CustomInput>
  );
};

export default Input;

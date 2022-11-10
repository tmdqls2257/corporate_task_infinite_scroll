import styled from "@emotion/styled";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button/Button";
import Icon, { IconType } from "../Icon/Icon";
import Input from "../input/Input";

const Container = styled.form`
  display: flex;
  border-radius: 1rem;
  outline: solid;
  width: fit-content;
`;

type FormData = {
  title: string;
};

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data: FormData) =>
    console.log(data);

  const [filterComponentState, setFilterComponentState] = useState(false);

  const onClickAdjustments = () => {
    setFilterComponentState(!filterComponentState);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Icon iconName={IconType.search} />
      <Input register={register} label={"title"} required={false} />
      <Button onClick={onClickAdjustments}>
        <Icon iconName={IconType.adjustments} />
      </Button>
    </Container>
  );
};

export default SearchBar;

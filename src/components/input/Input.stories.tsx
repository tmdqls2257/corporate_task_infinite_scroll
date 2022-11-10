import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
import { SubmitHandler, useForm } from "react-hook-form";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const InputDefault: ComponentStory<typeof Input> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  return <Input register={register} label={"title"} required={false} />;
};

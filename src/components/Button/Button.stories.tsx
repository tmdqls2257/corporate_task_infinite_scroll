import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const ButtonDefault: ComponentStory<typeof Button> = () => (
  <Button>{"storybook test"}</Button>
);

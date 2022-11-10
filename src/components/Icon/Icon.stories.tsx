import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon, { IconType } from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const IconDefault: ComponentStory<typeof Icon> = () => (
  <Icon iconName={IconType.search} />
);

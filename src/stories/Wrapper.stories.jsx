import React from "react";
import Wrapper from "../components/Wrapper/Wrapper";

export default {
  title: "Components/Wrapper",
  component: Wrapper,
  argTypes: {
    size: {
      options: ["medium", "large"],
      control: { type: "radio" },
    },
    bgColor: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Wrapper {...args} />;

export const Medium = Template.bind({});
//   args list for medium wrapper
Medium.args = {
  size: "medium",
  bgColor: "light",
};

export const Large = Template.bind({});
//   args list for large wrapper
Large.args = {
  size: "large",
  bgColor: "light",
};

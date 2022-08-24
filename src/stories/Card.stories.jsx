import React from 'react';
import Card from '../components/Card/Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    header: {
      control: {
        type: 'text',
      },
    },
    body: {
      control: {
        type: 'text',
      },
    },
    footer: {
      control: {
        type: 'text',
      },
    },
  },
};

export const CardMedium = ({ header, body, footer }) => {
  return <Card header={header} body={body} footer={footer} />;
};

CardMedium.args = {
  header: 'This is a header',
  body: 'Ad nisi sint adipisicing aliqua amet in elit aliqua nisi. Nostrud eu ea in velit. Ad aliquip nulla voluptate laborum ut excepteur.',
  footer: 'this is a footer',
};

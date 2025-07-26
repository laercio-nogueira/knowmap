import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { h } from '@stencil/core';
import { fn } from 'storybook/test';
import { ButtonComponent } from '../../../src/components/button-component/button-component';
import React from 'react';

const meta = {
  title: 'Example/Button',
  component: ButtonComponent as any,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'contained', 'outlined'],
    },
  },
  //args: { onClick: fn(), variant: 'contained' },
} as any;

export default meta;

export const Default = {
  args: {
    variant: 'contained',
    size: 'medium',
  },
  render(args) {
    return <button-component {...args}>Button</button-component>;
  },
};

// export const Size: Story = {
//   args: {
//     variant: 'contained',
//     size: ['small', 'medium', 'large'],
//   },
//   render: args => {
//     return `
//       <button-component variant="${args.variant}" size="${args.size[0]}">Ola</button-component>
//       <button-component variant="${args.variant}" size="${args.size[1]}">Ola</button-component>
//       <button-component variant="${args.variant}" size="${args.size[2]}">Ola</button-component>
//     `;
//   },
// };

// export const Medium: Story = {
//   args: {
//     variant: 'contained',
//     size: 'medium',
//   },
//   render: args => {
//     return `<button-component variant="${args.variant}" size="${args.size}">Ola</button-component>`;
//   },
// };

// export const Large: Story = {
//   args: {
//     variant: 'contained',
//     size: 'large',
//   },
//   render: args => {
//     return `<button-component variant="${args.variant}" size="${args.size}">Ola</button-component>`;
//   },
// };

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'modelo-teste',
  styleUrl: 'modelo-teste.css',
  shadow: true,
})
export class ModeloTeste {
  render() {
    return (
      <Host>
        <slot>teste</slot>
      </Host>
    );
  }
}

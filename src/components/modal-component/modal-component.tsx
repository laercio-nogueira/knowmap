import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'modal-component',
  styleUrl: 'modal-component.css',
  shadow: true,
})
export class ModalComponent {
  render() {
    return (
      <Host>
        <slot>teste</slot>
      </Host>
    );
  }
}

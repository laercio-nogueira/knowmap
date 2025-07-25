import { Component, h, Prop, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'modal-component',
  styleUrl: 'modal-component.css',
  shadow: true,
})
export class ModalComponent {
  @Prop({ reflect: true }) open: boolean;
  @Event() handleClose: EventEmitter<void>;
  @Element() host: HTMLElement;

  private onOverlayClick = (e: MouseEvent) => {
    if (e.target === this.host.shadowRoot.querySelector('.modal-overlay')) {
      this.handleClose.emit();
    }
  };

  private onCloseClick = (e: MouseEvent) => {
    e.stopPropagation();
    this.handleClose.emit();
  };

  render() {
    if (!this.open) return null;
    return (
      <div class="modal-overlay" role="dialog" aria-modal="true" onClick={this.onOverlayClick}>
        <div class="modal-container">
          <button class="modal-close" aria-label="Fechar" onClick={this.onCloseClick}>
            &times;
          </button>
          <div class="modal-content">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}

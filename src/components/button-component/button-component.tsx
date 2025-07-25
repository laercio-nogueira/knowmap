import { Component, Prop, h, Element, Listen } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss',
  // scoped: true,
  shadow: true,
})
export class ButtonComponent {
  @Prop() classes: string;
  @Prop() color: string;
  @Prop() component: string;
  @Prop() disabled: string;
  @Prop() disableElevation: boolean;
  @Prop() disableFocusRipple: boolean = false;
  @Prop() disableRipple: boolean = false;
  @Prop() endIcon: Node;
  @Prop() fullWidth: boolean = false;
  @Prop() href: string;
  @Prop() loading: boolean = false;
  @Prop() loadingIndicator: Node;
  @Prop() loadingPosition: 'center' | 'end' | 'start' = 'center';
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() startIcon: Node;
  @Prop() sx: object;
  @Prop() variant: 'contained' | 'outlined' | 'text' = 'text';

  @Element() host: HTMLElement;

  @Listen('click', { capture: true })
  handleClick(event: MouseEvent) {
    const button = this.host.shadowRoot.querySelector('button');
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }

  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}

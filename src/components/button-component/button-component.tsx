import { Component, Prop, h, Element, Listen } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss',
  shadow: true,
})
export class ButtonComponent {
  @Element() host: HTMLElement;

  @Prop() classes: string;
  @Prop() component: string;
  @Prop() disabled: boolean;
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

  sizeButton = () =>
    ({
      medium: 'medium-button-class',
      large: 'large-button-class',
      small: 'small-button-class',
    }[this.size] ?? 'medium-button-class');

  variantButton = () =>
    ({
      outlined: 'outlined-button-class',
      contained: 'contained-button-class',
      text: 'text-button-class',
    }[this.variant] ?? 'contained-button-class');

  render() {
    const props = {};
    Array.from(this.host.attributes).forEach(attr => {
      props[attr.name] = attr.value;
    });

    return (
      <button
        disabled={this.disabled}
        class={`
          ${this.sizeButton()}
          ${this.variantButton()}
          ${this.classes}
        `}
        {...props}
      >
        <slot />
      </button>
    );
  }
}

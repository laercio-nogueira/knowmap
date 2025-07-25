import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss',
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

  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}

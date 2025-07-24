import { newSpecPage } from '@stencil/core/testing';
import { ModeloTeste } from '../modelo-teste';

describe('modelo-teste', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModeloTeste],
      html: `<modelo-teste></modelo-teste>`,
    });
    expect(page.root).toEqualHtml(`
      <modelo-teste>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </modelo-teste>
    `);
  });
});

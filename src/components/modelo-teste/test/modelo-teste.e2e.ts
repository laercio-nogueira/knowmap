import { newE2EPage } from '@stencil/core/testing';

describe('modelo-teste', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<modelo-teste></modelo-teste>');

    const element = await page.find('modelo-teste');
    expect(element).toHaveClass('hydrated');
  });
});

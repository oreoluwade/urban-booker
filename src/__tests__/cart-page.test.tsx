import React from 'react';
import { render } from '../../test-utils';
import CartPage from '../pages/cart';

describe('Cart', () => {
  it('Renders the Cart page without crashing', () => {
    const { getByText } = render(<CartPage />);
    const noItemsText = getByText('No items currently in basket');
    expect(noItemsText).toBeInTheDocument();
  });
});

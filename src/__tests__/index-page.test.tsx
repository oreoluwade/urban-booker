import React from 'react';
import { render } from '../../test-utils';
import Index from '../pages/index';

describe('Index', () => {
  it('Renders the Entry point into the application without crashing', () => {
    const { getByText } = render(<Index />);
    const pageTitle = getByText('Welcome to our scheduling page');
    expect(pageTitle).toBeInTheDocument();
  });
});

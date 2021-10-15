import React from 'react';
import Header from '../components/header';
import { render } from '../../test-utils';

test('renders the header component', () => {
  const { container } = render(<Header />);

  console.log('Container', container.firstChild, container.firstElementChild);
});

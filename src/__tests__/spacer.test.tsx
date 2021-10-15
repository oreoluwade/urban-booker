import React from 'react';
import Spacer from '../components/spacer';
import { render } from '../../test-utils';

test('renders the spacer component', () => {
  const { container } = render(<Spacer width={10} height={10} />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="width: 10px; height: 10px;"
    />
  `);
});

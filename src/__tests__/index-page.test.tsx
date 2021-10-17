import React from 'react';
import { render, screen, waitFor } from '../../test-utils';
import Index from '../pages/index';
import * as services from '../services';

const slots = [
  { id: 1, localisedTime: '12:00', price: '£13.00' },
  { id: 2, localisedTime: '14:00', price: '£100.00' },
  { id: 3, localisedTime: '15:00', price: '£79.99' }
];

const mockGetSlots = jest.spyOn(services, 'getSlots');
mockGetSlots.mockResolvedValue(slots);

jest.mock(
  'next/link',
  () =>
    ({ children }: { children: React.ReactNode }) =>
      children
);

describe('Index', () => {
  it('Renders the Entry point into the application without crashing', async () => {
    render(<Index />);
    await waitFor(() => {
      expect(
        screen.getByText('Welcome to our scheduling page')
      ).toBeInTheDocument();
    });
  });
});

import React from 'react';
import { render, screen, waitFor } from '../../test-utils';
import SlotPage from '../pages/slot/[sid]';
import * as services from '../services';

const availableWorkers = [
  { id: 1, name: 'Willy Orban', rating: '4.6', isNew: false },
  { id: 2, name: 'Andriy Shevchenko', rating: '5', isNew: false },
  { id: 3, name: 'Natasha Bloomfield', rating: '3', isNew: false }
];

const mockGetAvailableWorkers = jest.spyOn(services, 'getAvailableWorkers');

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Slot Page', () => {
  it('Renders available slots for an existing slot_id', async () => {
    useRouter.mockImplementation(() => ({
      route: '/slot',
      query: { sid: '2' },
      prefetch: jest.fn().mockImplementation(() => Promise.resolve({}))
    }));
    mockGetAvailableWorkers.mockResolvedValue(availableWorkers);

    render(<SlotPage />);
    await waitFor(() => {
      expect(
        screen.getByText(/Available workers for slot/)
      ).toBeInTheDocument();
    });
  });

  it('Renders an helpful message for non-existent slot_id', async () => {
    useRouter.mockImplementation(() => ({
      route: '/slot',
      query: { sid: 'random-text' },
      prefetch: jest.fn().mockImplementation(() => Promise.resolve({}))
    }));
    mockGetAvailableWorkers.mockResolvedValue(undefined);

    render(<SlotPage />);
    await waitFor(() => {
      expect(
        screen.getByText('The slot with Slot ID random-text does not exist')
      ).toBeInTheDocument();
    });
  });
});

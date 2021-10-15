import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { CartContextProvider } from './src/contexts/CartContext';

const AllTheProviders: FC = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

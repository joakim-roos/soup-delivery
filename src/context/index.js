import { createContext } from 'react';

export const NavigationContext = createContext({
  isHidden: true,
  toggleProfileNavigation: () => { }
})

export const OrderContext = createContext({
  order: [],
  handleAdd: () => { },
  handleIncrement: () => { },
  handleDecrement: () => { },
})

export const AuthUserContext = createContext(null);




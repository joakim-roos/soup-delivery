import { createContext } from 'react';

export const NavigationContext = createContext({
  isHidden: true,
  toggleProfileNavigation: () => { }
})

export const OrderContext = createContext({
  cart: [],
  addToCart: () => { }
})

export const AuthUserContext = createContext(null);




import { createContext } from 'react';

const NavigationContext = createContext({
  isHidden: true,
  toggleProfileNavigation: () => { }
})

export default NavigationContext;
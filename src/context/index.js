import { createContext } from 'react';

export const NavigationContext = createContext({
  isHidden: true,
  toggleProfileNavigation: () => { }
})

export const OrderContext = createContext({
  order: [],
})

export const AuthUserContext = createContext(null);

export const ModalContext = createContext({
  isModalOpen: false,
  handleOpenModal: () => { },
  handleClosedModal: () => { },
  toggleModal: () => { }
})



import React, { createContext, type Dispatch, type SetStateAction } from "react";

export type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export type AppPrice = {
  title_id: string;
  title: string;
  sub_title: string;
  itemList: List_icon[];
  decoy?: string;
};

export type List_icon = {
    icon: React.ElementType
    description: string
}

export type FooterLinks = {
  title: string;
  links: List_icon[];
}
export type Modal = boolean; // true or false

export type SetModal = Dispatch<SetStateAction<Modal>>;

export interface ContextType {
  value: Record<string, never>;
  features: Feature[];
  app_prices: AppPrice[];
  History: List_icon[];
  FooterIcons: List_icon[];
  FooterLinks: FooterLinks[];
  ModalNavBar: Modal;
  setModalNavBar: SetModal;
  ModalLogin: Modal;
  setModalLogin: SetModal;
  ListIcon: List_icon[];
}


const AppContext = createContext({} as ContextType);

export default AppContext;

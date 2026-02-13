import { createContext, type Dispatch, type SetStateAction } from "react";

export interface ContextType {
  navigationSidebar: list_icon[];
  ModulesName: string;
  setModulesName: Dispatch<SetStateAction<string>>;
  TextNavbar: boolean;
  setTextNavbar: Dispatch<SetStateAction<boolean>>;
  navfinance: list_icon[];
  navproviders: list_icon[];
  navidentities: list_icon[];
  navinvestments: list_icon[];
  navrh: list_icon[];
  navwarehouse: list_icon[];
  navbudgets: list_icon[];
  navdiary: list_icon[];
  navprojects: list_icon[];
  navtasks: list_icon[];
  navstorage: list_icon[];
  navMap: Record<string, list_icon[]>;
  navTop: string;
  setnavTop: Dispatch<SetStateAction<string>>;
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

const Context = createContext({} as ContextType);

export default Context;

export type list_icon = {
  icon: React.ElementType;
  description: string;
  id: string;
};

export type card = {
  position: number;
  title: string;
  description?: string;
  icon?: React.ElementType;
  debit?: Coin;
  credit?: Coin;
  balance?: Coin;
  value?: number;
  datestart?: string;
  dateend?: string;
  progress?: number;
  status?: string;
  companies?: string;
  category?: string;
  telephone?: string;
  email?: string;
  address?: string;
  feedback?: string;
  size?: string;
  type?: string;
  price?: Coin;
  percent?: Percents;
};

export type Percents = number & { __brand: "Percents" };
export type Coin = number & { __brand: "Coin" };

export function number_percents(value: number): Percents {
  return (value * 100) as Percents;
}

export function percents_number(value: Percents): number {
  return (value / 100) as number;
}

export function number_Coin(value: number): Coin {
  return value as Coin;
}

export function Coin_number(value: Coin): number {
  return value as number;
}
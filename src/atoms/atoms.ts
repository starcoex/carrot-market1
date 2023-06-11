import { useEffect, useState } from "react";
import { atom, selector, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

export const isDarkState = atom({
  key: "isDarkState",
  default: true,
});
interface IFinancialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  exerciseOptionPrice: string;
}

export interface IPerson {
  id: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: IFinancialAsset[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}
const restoreState = (key: string) => {
  const state = localStorage.getItem(key);
  if (!state) return [];
  return JSON.parse(state);
};
// const sessionStorage =
//   typeof window !== "undefined" ? window.sessionStorage : undefined;
// const { persistAtom } = recoilPersist({
//   key: "nextjs",
//   storage: sessionStorage,
// });
const { persistAtom } = recoilPersist();
export const personState = atom<IPerson>({
  key: "personState",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
export const isDartState = atom({
  key: "isDarkState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const isDartSessionState = atom<boolean>({
  key: "isDartSessionState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const minuteState = atom({
  key: "minuteState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const housrSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minuter = get(minuteState);
    return minuter / 60;
  },
});

export function useDarkMode() {
  const [isInitial, setIsInitial] = useState(true);
  const [darkModeStored, setDarkModeStored] = useRecoilState(isDarkState);

  useEffect(() => {
    setIsInitial(false);
  }, []);
  return [
    isInitial === true ? false : darkModeStored,
    setDarkModeStored,
  ] as const;
}

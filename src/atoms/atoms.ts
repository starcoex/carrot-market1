import { atom } from "recoil";
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
const { persistAtom } = recoilPersist();

export const personState = atom<IPerson>({
  key: "personState",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

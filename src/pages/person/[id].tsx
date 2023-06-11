import Seo from "@/components/Seo";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { fetchBillion } from "../api/api";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { personState } from "@/atoms/atoms";
import { useEffect } from "react";

interface Props {}
interface RouterProps {
  id: string;
  name: string;
}
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
// interface IBio {
//   0: string;
//   1: string;
//   2: string;
//   3: string;
//   4: string;
// }
// interface IAbout {
//   0: string;
//   1: string;
//   2: string;
//   3: string;
// }
interface IPerson {
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
const Img = styled.img`
  width: 350px;
  height: 350px;
`;

const Person: NextPage<Props> = ({}) => {
  const {
    query: { id },
  } = useRouter();
  const [person, setPerson] = useRecoilState(personState);
  const { isLoading, data } = useQuery<IPerson>(["Person"], () =>
    fetchBillion(id as string)
  );
  // useEffect(() => {
  //   fetch(
  //     `https://billions-api.nomadcoders.workers.dev/person/${router.query.id}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, [person]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://billions-api.nomadcoders.workers.dev/person/${id}`
      );
      const json = await response.json();
      setPerson(json);
    })();
  }, []);
  console.log(person);
  return (
    <div>
      <Seo title="Person" />
      <h1>{person?.city}</h1>
      <h1>{isLoading ? "Loading..." : data?.name}</h1>
      {
        <div>
          <Img src={person?.squareImage} />
          <h1>{data?.name}</h1>
          <h2>
            NetWorth: {String(Math.trunc(data?.netWorth as number)).slice(0, 3)}{" "}
            Billion
          </h2>
          <h2>Coungry : {data?.country}</h2>
          <h2>Industries : {data?.industries}</h2>
          <p>{data?.bio}</p>
          <br />
          <h1>Financial Assets</h1>
          {/* {data?.financialAssets.map((value) => (
            <div key={value.numberOfShares}>
              <span>Ticker : {value.ticker}</span>
            </div>
          ))} */}
          <hr />
          {
            <ul>
              {data?.financialAssets?.map((value) => (
                <li key={value.numberOfShares}>Ticket : {value.ticker}</li>
              ))}
            </ul>
          }
          {
            <ul>
              {data?.financialAssets?.map((value) => (
                <li key={value.numberOfShares}>
                  Shares : {value.numberOfShares}
                </li>
              ))}
            </ul>
          }

          {/* <div>
            <span>Ticket: {data?.financialAssets[0].ticker}</span>
            <span>Ticket: {data?.financialAssets[1].ticker}</span>
            <span>Ticket: {data?.financialAssets[2].ticker}</span>
            <span>Ticket: {data?.financialAssets[3].ticker}</span>
            <span>Ticket: {data?.financialAssets[4].ticker}</span>
            <span>Ticket: {data?.financialAssets[5].ticker}</span>
          </div>
          <div>
            <span>Shares: {data?.financialAssets[0].numberOfShares}</span>
            <span>Shares: {data?.financialAssets[1].numberOfShares}</span>
            <span>Shares: {data?.financialAssets[2].numberOfShares}</span>
            <span>Shares: {data?.financialAssets[3].numberOfShares}</span>
            <span>Shares: {data?.financialAssets[4].numberOfShares}</span>
            <span>Shares: {data?.financialAssets[5].numberOfShares}</span>
          </div> */}
          {
            <ul>
              {data?.financialAssets?.map((value) => (
                <li key={value.exerciseOptionPrice}>
                  Exercise Price : {value.exerciseOptionPrice}
                </li>
              ))}
            </ul>
          }
          {/* <div>
            <span>
              Exercise Price : $
              {data?.financialAssets[0].exerciseOptionPrice === undefined
                ? "null"
                : ""}
            </span>
            <span>
              Exercise Price : ${data?.financialAssets[1].exerciseOptionPrice}
            </span>
            <span>
              Exercise Price : ${data?.financialAssets[2].exerciseOptionPrice}
            </span>
            <span>
              Exercise Price : ${data?.financialAssets[3].exerciseOptionPrice}
            </span>{" "}
            <span>
              Exercise Price : ${data?.financialAssets[4].exerciseOptionPrice}
            </span>{" "}
            <span>
              Exercise Price : ${data?.financialAssets[5].exerciseOptionPrice}
            </span>
          </div> */}
        </div>
      }
    </div>
  );
};

export default Person;

// export async function getServerSideProps() {
//   const { results } = await (
//     await fetch(`https://localhost:3000/api/person/:id`)
//   ).json();
//   return {
//     props: {
//       results: results,
//     },
//   };
// }

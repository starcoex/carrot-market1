import Seo from "@/components/Seo";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { fetchBillions } from "./api/api";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}
interface IBillions {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 50px;
  }
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
`;
const Index: NextPage<Props> = ({ results }: any) => {
  const { isLoading, data } = useQuery<IBillions[]>(
    ["billions"],
    fetchBillions,
    {
      select: (data) => data.slice(0, 100),
    }
  );
  const router = useRouter();
  const onClick = (id: string, name: string) => {
    router.push(
      {
        pathname: `/person/${id}`,
        query: {
          id: id,
          name: name,
        },
      },
      `/person/${id}`
    );
  };
  return (
    <div>
      <Seo title="Home" />
      <Container>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          data?.map((value) => (
            <div key={value.id} onClick={() => onClick(value.id, value.name)}>
              <Link href={`/person/${value.name}`}>
                <Img src={value.squareImage} />
              </Link>
              <span>{value.id}</span>
              <span>{value.name.slice(0, 10)}</span>
            </div>
          ))
        )}
      </Container>
    </div>
  );
};

export default Index;
const API_KEY = "10923b261ba94d897ac6b81148314a3f";
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  ).json();
  return {
    props: {
      results: results,
    },
  };
}

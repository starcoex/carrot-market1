import { NextPage } from "next";
import Head from "next/head";

interface Props {
  title: string;
}

const Seo: NextPage<Props> = ({ title }: Props) => {
  return (
    <Head>
      <title>{`${title} | Next Billionaary`}</title>
    </Head>
  );
};

export default Seo;

import Seo from "@/components/Seo";
import { NextPage } from "next";

interface Props {}

const Person: NextPage<Props> = ({}) => {
  return (
    <div>
      <Seo title="Person" />
      Peson
    </div>
  );
};

export default Person;

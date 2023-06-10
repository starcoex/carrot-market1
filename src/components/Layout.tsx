import { NextPage } from "next";
import NavBar from "./NavBar";
import Home from "@/pages";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }: Props) => {
  return (
    <>
      <NavBar />

      <div>{children}</div>
    </>
  );
};

export default Layout;

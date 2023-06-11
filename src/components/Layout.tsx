import { NextPage } from "next";
import NavBar from "./NavBar";
import Home from "@/pages";
import { useDarkMode } from "@/atoms/atoms";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }: Props) => {
  const [darkMode] = useDarkMode();
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;

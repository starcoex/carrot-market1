import { isDarkState } from "@/atoms/atoms";
import Home from "@/pages";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

interface Props {}

const NavBar: NextPage<Props> = ({}) => {
  // const [isDark, setIsDark] = useRecoilState(isDarkState);

  const router = useRouter();
  return (
    <nav>
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        Billions-Home
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          padding: 20px;
           {
            /* height: 100vh; */
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;

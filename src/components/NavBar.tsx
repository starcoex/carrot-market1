import { isDarkState, useDarkMode } from "@/atoms/atoms";
import Home from "@/pages";
import { NextPage } from "next";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

interface Props {}

const NavBar: NextPage<Props> = ({}) => {
  // const [isDark, setIsDark] = useRecoilState(isDarkState);

  const router = useRouter();
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const [darkMode, setDarkMode] = useDarkMode();
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    localStorage.setItem("isDarkState", JSON.stringify(isDark));
  }, [isDark]);
  return (
    <>
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        // 클릭시 다크모드면 라이트로 바꿈
        className={`mr-3 animate-pulse`}
      >
        {theme === "light" ? (
          <Image
            src={`/달.png`}
            alt={""}
            width={50}
            height={50}
            className={`rounded-3xl hover:cursor-pointer`}
          />
        ) : (
          <Image
            src={`/해.png`}
            alt={""}
            width={50}
            height={50}
            className={`rounded-3xl hover:cursor-pointer`}
          />
        )}
      </button>
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
    </>
  );
};

export default NavBar;

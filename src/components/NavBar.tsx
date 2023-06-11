import { isDarkState, useDarkMode } from "@/atoms/atoms";
import Home from "@/pages";
import { NextPage } from "next";
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
  useEffect(() => {
    localStorage.setItem("isDarkState", JSON.stringify(isDark));
  }, [isDark]);
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      {/* <input
        type="chckbox"
        className="sr-only peer"
        onClick={() => {
          setIsDark(!isDark);
          localStorage.setItem("theme", isDark ? "dark" : "light");
        }}
        checked={localStorage.getItem("theme") == "dark" ? true : false}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        다크 모드 {localStorage.getItem("theme") == "dark" ? "On" : "Off"}
      </span> */}
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
    </label>
  );
};

export default NavBar;

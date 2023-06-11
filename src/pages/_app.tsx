import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Globalstyle } from "@/styles/GlobalStyle";
// import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/styles/theme";
import { RecoilRoot, useRecoilState } from "recoil";
import { isDarkState } from "@/atoms/atoms";
import { useState } from "react";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark((current) => !current);
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* <ThemeProvider theme={isDark ? darkTheme : lightTheme}> */}
        <ThemeProvider attribute="class">
          <button onClick={toggleTheme}>
            {isDark ? "DarkMode" : "LightMode"}
          </button>
          <Globalstyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={true} />
          {/* </ThemeProvider> */}
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { RecoilRoot, useRecoilState } from "recoil";

import { useState } from "react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark((current) => !current);
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

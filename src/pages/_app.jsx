import "@/src/styles/globals.css";
import Head from "next/head";
import { useCounter } from "@/src/hooks/useCounter";
import { useInputArray } from "@/src/hooks/useInputArray";
import { useBgColor } from "../hooks/useBgColor";

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  const bgColor = useBgColor();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
}

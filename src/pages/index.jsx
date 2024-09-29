import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = (event) => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <div className={`${styles.page}`}>
        <Header />
        <h1>{count}</h1>
        <button onClick={handleClick}>ボタン</button>
        <Main page="index" />
        <Footer />
      </div>
    </div>
  );
}

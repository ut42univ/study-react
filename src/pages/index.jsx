import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback } from "react";

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((event) => {
    console.log(event.target.href);
    event.preventDefault();
    alert(foo);
  }, []);

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <div className={`${styles.page}`}>
        <Header />
        <a href="/about" onClick={handleClick}>
          ボタン
        </a>
        <Main page="index" />
        <Footer />
      </div>
    </div>
  );
}
import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <div className={`${styles.page}`}>
        <Header />
        <Main page="about" />
        <Footer />
      </div>
    </div>
  );
}
import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(
    (event) => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
      console.log(count);
    },
    [count]
  );

  const handleChange = useCallback((event) => {
    if (event.target.value.length > 5) {
      alert("5文字以内で入力してください");
      return;
    }
    setText(event.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  });

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <div className={`${styles.page}`}>
        <Header />
        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
        <input type="text" value={text} onChange={handleChange} />
        <Main page="index" />
        <Footer />
      </div>
    </div>
  );
}

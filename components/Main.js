import Image from "next/image";
import styles from "./Main.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <Headline page={props.page} onClick={() => alert(`${props.page} Page`)}>
        <code>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}

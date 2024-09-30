import Image from "next/image";
import styles from "./Footer.module.css";
import { useState } from "react";

const ITEMS = [
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    src: "https://nextjs.org/icons/file.svg",
    alt: "File icon",
    text: "Learn",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    src: "https://nextjs.org/icons/window.svg",
    alt: "Window icon",
    text: "Examples",
  },
  {
    href: "https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    src: "https://nextjs.org/icons/globe.svg",
    alt: "Globe icon",
    text: "Go to nextjs.org →",
  },
];

export const Footer = () => {
  const [items, setItems] = useState(ITEMS);

  const handleReduce = () => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  };

  return (
    <footer className={styles.footer}>
      <button onClick={handleReduce}>減らす</button>
      {items.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src={item.src}
              alt={item.alt}
              width={16}
              height={16}
            />
            {item.text}
          </a>
        );
      })}
    </footer>
  );
};

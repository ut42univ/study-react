import Link from "next/link";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link href={item.href} key={item.href}>
            <div className={styles.anchor}>{item.label}</div>
          </Link>
        );
      })}
    </header>
  );
};

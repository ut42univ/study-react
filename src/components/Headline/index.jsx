import styles from "./Headline.module.css";

export const Headline = (props) => {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>
      <ol>
        <li>Get started by editing {props.children}.</li>
        <li>Save and see your changes instantly.</li>
      </ol>
      <button onClick={props.onClick}>Click me</button>
    </div>
  );
};

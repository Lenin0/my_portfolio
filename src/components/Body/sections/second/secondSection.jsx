import styles from "./secondSection.module.css";

export const SecondSection = () => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
      <div className={styles.line}></div>
        <p>Some of my latest work</p>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

import { FirtsSection } from "./sections/firts/firtsSection";
import { SecondSection } from "./sections/second/secondSection";
import styles from "./body.module.css";


export const Body = () => {
  return (
    <div className={styles.content}>
      <FirtsSection />
      <SecondSection />
    </div>
  );
};

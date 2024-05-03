import styles from "./firtsSection.module.css";
import pedro from "../../../../img/pedro.svg";

export const FirtsSection = () => {
  return (
    <div className={styles.content}>
      <div className={styles.first_div}>
        <div className={styles.container}>
        <div className={styles.header_firts}>
          <span>
            {` < `} <h1>developer</h1> {` > `}
          </span>
        </div>
        <div className={styles.about}>
          <p>
            Hi! I am a Front-end developer specialized in React, but I have
            knowledge of other frameworks, able to adapt perfectly to meet the
            specific formatting requirements of any product or project.
          </p>
        </div>
        </div>
       
      </div>
      <div className={styles.second_div}>
        <img className={styles.img} src={pedro} />
      </div>
    </div>
  );
};

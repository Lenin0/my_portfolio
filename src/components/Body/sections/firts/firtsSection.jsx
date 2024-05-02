import styles from "./firtsSection.module.css"
import pedro from "../../../../img/pedro.svg"

export const FirtsSection = () => {
    return (
        <div className={styles.content}>
          <div className={styles.first_div}>
            <div className={styles.header_firts}>
              <span>
                {` < `} <h1>coder</h1> {` > `}
              </span>
            </div>
            <div className={styles.about}>
              <p>
                Front-end developer who works with React
                <br />
                and easily adapts to meet the specific formatting requirements of
                any product or project.
              </p>
            </div>
          </div>
          <div className={styles.second_div}>
            <img className={styles.img} src={pedro}/>
          </div>
        </div>
      );
}
import styles from "./header.module.css";
import instagram from "../../img/Instagram.svg";
import linkedin from "../../img/Linkedin.svg";
import gith from "../../img/gith.svg";
export const Header = () => {
  const redirectTo = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div className={styles.content}>
        {/* <div className={styles.logo}>IMG</div> */}
        <div className={styles.menu}>
          <p>About</p>
          <p>Portfolio</p>
          <p>Tools</p>
          <p>Contact</p>
        </div>
        <div className={styles.social_media}>
            <img
              src={instagram}
              alt="insta"
              onClick={() => redirectTo("https://www.instagram.com/predokas/")}
            />
            <img
              src={linkedin}
              alt="insta"
              onClick={() => redirectTo("https://www.linkedin.com/in/lenin0/")}
            />
            <img
              src={gith}
              alt="insta"
              onClick={() => redirectTo("https://github.com/Lenin0")}
            />
          </div>
      </div>
    </>
  );
};

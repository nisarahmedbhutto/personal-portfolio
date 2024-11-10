import styles from "./page.module.css";
import Card1 from "../../../components/main/card1";
import Card2 from "../../../components/main/card2";
import Card3 from "../../../components/main/card3";
import Card4 from "../../../components/main/card4";
import Card5 from "../../../components/main/card5";
import Card6 from "../../../components/main/card6";


export default function About() {
  return (
    <>
      <div id={styles.projects}>
        <div id={styles.project}>
          <div id={styles.head}>
            <h1>
              My <span>Projects</span>
            </h1>
          </div>
          <div className={styles.cliProjects}>
            <div className={styles.userProject}>
              <h2>
                User <span>Interface</span> Projects
              </h2>
            </div>
            <div className={styles.pro}>
              <Card1 />
              <Card2 />
              <Card3 />
            </div>
          </div>
        </div>
        <div className={styles.cliProjects}>
          <div className={styles.userProject}>
            <h2>
              Cammand Line <span>Interface</span> Projects
            </h2>
          </div>
          <div className={styles.pro}>
            <Card4 />
            <Card5 />
            <Card6 />
          </div>
        </div>
      </div>
    </>
  );
}

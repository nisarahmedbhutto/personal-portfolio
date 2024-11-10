"use client";

import styles from "./page.module.css";
import Image from "next/image";
import profile from "../../images/profile.jpg";
import Card1 from "../../components/main/card1";
import Card2 from "../../components/main/card2";
import Card3 from "../../components/main/card3";
import Card4 from "../../components/main/card4";
import Card5 from "../../components/main/card5";
import Card6 from "../../components/main/card6";


export default function Home() {
  return (
    <div id={styles.homePage}>
      <section id={styles.profile}>
        <div id={styles.headings}>
          <h2>
            Hey. I Am <br /> Nisar Ahmed Bhutto
          </h2>
          <hr />
          <h3>
            I Am <span>FrontEnd</span> Developer
          </h3>
        </div>
        <div id={styles.imgContenor}>
          <figure>
            <Image src={profile} alt=" profile" width={1250} height={1250} />
          </figure>
        </div>
      </section>
      <section id={styles.skills}>
        <div>
          <div>
            <h2>
              My <span>Skills</span>
            </h2>
          </div>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Next.Js</li>
            </ul>
          </div>
        </div>
      </section>
      <section id={styles.journey}>
        <div>
          <h2>
            My Programing <span>Journey</span>
          </h2>
        </div>
        <div>
          <p>
            I am a frontend developer who recently started learning programming.
            I joined <span>GIAIC </span>as a student and completed my first
            quarter there. I have also created several projects.
          </p>
        </div>
      </section>
      <section id={styles.projects}>
        <div id={styles.lastHead}>
          <h2>
            My <span>Projects</span>
          </h2>
        </div>
        <div id={styles.uiProjects}>
          <div>
            <h2>
              User <span> Interface</span> Projects
            </h2>
          </div>
          <div id={styles.uicard}>
            <Card1 />
            <Card2 />
            <Card3 />
          </div>
        </div>
        <div id={styles.cliProjects}>
          <div>
            <h2>
              Cammand Line <span>Interface</span> Projects
            </h2>
          </div>
          <div id={styles.clicard}>
            <Card4 />
            <Card5 />
            <Card6 />
          </div>
        </div>
      </section>
    </div>
  );
}

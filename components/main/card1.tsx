"use client";

import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import resume from "../../images/resume-1.png";



export default function Card1() {
    return (
      <>
        <div id={styles.cardCentenor}>
          <div id={styles.card}>
            <div>
              <Image src={resume} alt="profile" width={500} height={500} />
            </div>
            <div id={styles.discreption}>
              <h1>Resume Builder </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                quaerat, nisi expedita distinctio non repellat?
              </p>

              <button>
                <Link
                  href={
                    "https://github.com/nisarahmedbhutto/Html---css-assignments-.git"
                  }
                >
                  View Project
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}
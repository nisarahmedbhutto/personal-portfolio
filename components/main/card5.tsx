"use client";

import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import student from "../../images/student-system.png"

export default function Card5() {
    return (
      <>
        <div id={styles.cardCentenor}>
          <div id={styles.card}>
            <div>
              <Image src={student} alt="profile" width={500} height={500} />
            </div>
            <div id={styles.discreption}>
              <h1>Resume Builder </h1>
              <p>this is a simple resume builder project </p>
              <p>this is a simple resume builder project </p>
              <p>this is a simple resume builder project </p>

              <button>
                <Link
                  href={
                    "https://github.com/nisarahmedbhutto/Student-Management-System-OOP-Base-Program.git"
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
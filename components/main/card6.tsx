"use client";

import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import todo from "../../images/todo.png"

export default function Card6() {
    return (
      <>
        <div id={styles.cardCentenor}>
          <div id={styles.card}>
            <div>
              <Image src={todo} alt="profile" width={500} height={500} />
            </div>
            <div id={styles.discreption}>
              <h1>Resume Builder </h1>
              <p>this is a simple resume builder project </p>
              <p>this is a simple resume builder project </p>
              <p>this is a simple resume builder project </p>

              <button>
                <Link
                  href={
                    "https://github.com/nisarahmedbhutto/advance-todo-list.git"
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
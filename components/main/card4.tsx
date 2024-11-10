"use client";

import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import game from "../../images/game.png"

export default function Card4() {
    return (
      <>
        <div id={styles.cardCentenor}>
          <div id={styles.card}>
            <div>
              <Image src={game} alt="profile" width={500} height={500} />
            </div>
            <div id={styles.discreption}>
              <h1>Resume Builder </h1>
              <p>this is a simple resume builder project </p>
              <p>this is a simple resume builder project </p>
              <p>this is a simple resume builder project </p>

              <button>
                <Link
                  href={
                    "https://github.com/nisarahmedbhutto/advanture-game-this-is-my-program-.git"
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
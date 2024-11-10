"use client";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div id={styles.footer}>
      <div>
        <ol id={styles.socialLinks}>
          <li>
            <Link href={"https://www.google.com"}>Google</Link>
          </li>
          <li>
            <Link href={"https://www.facebook.com"}>FaceBook</Link>
          </li>
          <li>
            <Link href={"https://www.twitter.com"}>YouTube</Link>
          </li>
          <li>
            <Link href={"https://www.youtube.com"}>Twitter</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

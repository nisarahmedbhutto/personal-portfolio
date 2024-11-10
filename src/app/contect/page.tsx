import Link from "next/link";
import styles from "./page.module.css";


export default function About() {
  return (
    <>
      <div id={styles.contectPage}>
        <div>
          <ol>
            <li><span>Name :</span> Nisar Ahmed Bhutto</li>
            <li><span>Phone :</span> +923492029262</li>
            <li><span>Email :</span> <Link href={"mailto://www.bhuttonisar@gmail.com"}>Email</Link></li>
            <li><span>Address :</span> Karachi Malir Landhi</li>
          </ol>
        </div>
      </div>
    </>
  );
}

import styles from "./page.module.css"

export default function About() {
    return (
      <>
        <div id={styles.introduction}>
          <ol>
            <li>Name : Nisar Ahmed Bhutto </li>
            <li>Feeld : Developer</li>
            
          </ol>
          <dl>
            <dt>Skills</dt>
            <dd>HTML</dd>
            <dd>CSS</dd>
            <dd>JvaScript</dd>
            <dd>TypeScript</dd>
          </dl>
          
        </div>
      </>
    );
}
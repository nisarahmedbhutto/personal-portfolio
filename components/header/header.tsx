"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMan, AiOutlineClose } from "react-icons/ai";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Corrected the logic to toggle the state properly
    };

    return (
      <>
        <header id={styles.header}>
          <div>
            <h1>
              Personal <span>Portfolio</span>
            </h1>
          </div>
          {/* decstop navigation */}
          <div id={styles.pages}>
            <ol>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contect"}>Contect</Link>
              </li>
              <li>
                <Link href={"/projects"}>Projects</Link>
              </li>
            </ol>
          </div>
          {/* Hamburger Icon */}
          <div id={styles.hidden} onClick={toggleMenu}>
            {isMenuOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMan size={30} />
            )}
          </div>
          {/* Mobile Menu (Appears when hamburger is clicked) */}
          {isMenuOpen && (
            <ul id={styles.pagesMobile}>
              <li>
                <Link href={"/"} onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/about"} onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href={"/contact"} onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/projects"} onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
            </ul>
          )}
        </header>
      </>
    );
}    
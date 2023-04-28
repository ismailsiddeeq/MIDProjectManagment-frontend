import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <header>
        <Link className={styles.logo} href="/">MID Project Management</Link>

        <input type="checkbox" id="menu-bar" className={styles.menubar}></input>
        <label for="menu-bar">menu</label>

        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
                  <Link href="/about-us">About</Link>
                </li>
            <li>
              <Link href="/employer">Employer Portal</Link>
              <ul>
                
                <li>
                  <Link href="/create">Create Task</Link>
                </li>
                <li>
                  <Link href="/assign">Assign Task</Link>
                </li>
                <li>
                  <Link href="/update">Update Employee Time Card</Link>
                </li>
                <li>
                  <Link href="/delete">Delete Task</Link>
                </li>
                
              </ul>
              
            </li>

            <li>
            <Link href="/employee">Employee Portal</Link>
            <ul>
            <li>
                  <Link href="/clockin">Clock in</Link>
                </li>
                <li>
                  <Link href="/clockout">Clock Out</Link>
                </li>
                <li>
                  <Link href="/take">Take a Task</Link>
                </li>
               

            </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

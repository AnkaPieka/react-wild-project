import React from "react";
import profilePic from "../../assets/pic_profile_wilder.png";
import Skills from "../Skills/Skills";
import styles from "./Wilder.module.css";

function Wilder({ name, description, skills }) {
  return (
    <div className={styles.wilderCard} key={name}>
      <img src={profilePic} alt="wilder profile pic" />

      <section>
        <h3 className={styles.name}>{name}</h3>

        <p className={styles.description}>{description}</p>

        <div className={styles.skills}>
          <Skills skills={skills} />
        </div>
      </section>
    </div>
  );
}

export default Wilder;

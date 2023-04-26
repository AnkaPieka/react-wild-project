import React from "react";
import styles from "./Skills.module.css";

function Skills({ skills = [] }) {
  return (
    <div className={styles.skills}>
      <h4>Wild Skills</h4>

      <ul className={styles.skillsList}>
        {skills.map((skill, i) => (
          <li className={styles.skill} key={"skill_" + i}>
            <s className={styles.skillName}>{skill.name}</s>
            <p className={styles.skillGrade}>{skill.vote}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

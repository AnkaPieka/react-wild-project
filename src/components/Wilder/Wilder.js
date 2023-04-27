import React from "react";
import profilePic from "../../assets/pic_profile_wilder.png";
import Skills from "../Skills/Skills";
import styles from "./Wilder.module.css";
import axios from "axios";

function Wilder({ id, name, description, skills }) {
  // const handleDeleteWilder = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.delete(`http://localhost:5000/api/wilder/${id}`);
  //     console.log("Response", response);
  //   } catch (err) {
  //     console.log("Error while deleting:", err);
  //   }
  // };

  return (
    <div className={styles.wilderCard} key={id + name}>
      <img src={profilePic} alt="wilder profile pic" />

      <section>
        <h3 className={styles.name}>{name}</h3>

        <p className={styles.description}>{description}</p>

        <div className={styles.skills}>
          <Skills skills={skills} />
        </div>
      </section>

      {/* <button onClick={handleDeleteWilder}>Delete wilder</button> */}
    </div>
  );
}

export default Wilder;

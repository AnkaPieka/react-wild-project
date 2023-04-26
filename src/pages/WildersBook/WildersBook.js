import React from "react";
import Wilder from "../../components/Wilder/Wilder";
import styles from "./WildersBook.module.css";

const dummyDataUser = [
  {
    name: "Dwight Schrute",
    description:
      "The Schrutes have a word for when everything in a man's life comes together perfectly. Perfectenschlag. Right now, I am in it.",
    skills: [
      {
        name: "PHP",
        vote: "5",
      },
      {
        name: "C#",
        vote: "9",
      },
    ],
  },
  {
    name: "Michael Scott",
    description:
      "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been... ever, for any reason whatsoever...",
    skills: [
      {
        name: "CSS",
        vote: 0,
      },
      {
        name: "HTML",
        vote: 0,
      },
    ],
  },
  {
    name: "Pamela Beesly",
    description:
      "There’s a lot of beauty in ordinary things. Isn’t that kind of the point?",
    skills: [
      {
        name: "CSS",
        vote: 10,
      },
      {
        name: "JavaScript",
        vote: 4,
      },
    ],
  },
  {
    name: "Jimothy Halpert",
    description: "Bears. Beets. Battlestar Galactica.",
    skills: [
      {
        name: "React",
        vote: 6,
      },
      {
        name: "TypeScript",
        vote: 4,
      },
      {
        name: "CSS",
        vote: 2,
      },
      {
        name: "Cobol",
        vote: 10,
      },
    ],
  },
];

function WildersBook() {
  return (
    <div id={styles.wilderBookContainer}>
      <section>
        <h2>Wilders</h2>

        <div className={styles.WildersBookCardRow}>
          {dummyDataUser.map((user) => (
            <Wilder
              name={user.name}
              description={user.description}
              skills={user.skills}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default WildersBook;

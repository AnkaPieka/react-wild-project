import React, { useEffect, useState } from "react";
import axios from "axios";
import Wilder from "../../components/Wilder/Wilder";
import styles from "./WildersBook.module.css";
import Form from "../../components/Form/Form";

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
  const [wilders, setWilders] = useState([]);

  console.log(wilders);

  useEffect(() => {
    const fetchData = async () => {
      const wildersFromDB = await axios.get("http://localhost:5000/api/wilder");

      setWilders(wildersFromDB.data);
    };

    fetchData();
  }, []);

  return (
    <div id={styles.wilderBookContainer}>
      <section>
        <Form />
      </section>

      <section>
        <h2>Wilders</h2>

        <div className={styles.WildersBookCardRow}>
          {wilders.map((wilder) => (
            <Wilder
              key={wilder.id}
              id={wilder.id}
              name={wilder.name}
              city={wilder.city}
              description={wilder.description}
              skills={wilder.skills}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default WildersBook;

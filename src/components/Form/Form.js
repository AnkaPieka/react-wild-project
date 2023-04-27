import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const handleNameChange = (name) => {
    setName(name);
  };

  const handleCityChange = (city) => {
    setCity(city);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/wilder", { name, city });
  };

  return (
    <div className={styles.addWilder}>
      <h3>Add a wilder</h3>

      <form method="post" onSubmit={onFormSubmit}>
        <section>
          <label className="wilder-name">
            Name:
            <input
              type="text"
              value={name ? name : ""}
              onChange={(e) => handleNameChange(e.currentTarget.value)}
            />
          </label>
        </section>

        <section>
          <label className="wilder-city">
            City:
            <input
              type="text"
              value={city ? city : ""}
              onChange={(e) => handleCityChange(e.currentTarget.value)}
            />
          </label>
        </section>

        <input type="submit" value="Add wilder" />
      </form>
    </div>
  );
}

export default Form;

import "./App.css";
import React, { useState } from "react";
import data from "./data.js";
import { object } from "prop-types";

function App() {
  const [word, setWord] = useState("software");
  const [associations, setAssociations] = useState(null);

  // this is how React is talking to express
  const getAssociations = () => {
    fetch("/api/associations/" + word)
      .then((result) => result.json())
      .then((body) => {
        // console.log(body);
        return setAssociations(body);
      });
  };

  function checkData() {
    // console.log(Object.entries(data));
    // const { items, text } = data;
    // console.log(items);
  }

  // had to change from using Object.entries to just using associations directly
  // for the object destructuring need to make sure to use the parenthesis around the curly brackets
  // also need to use curly brackets for objects and brackets for arrays
  return (
    <div className="app">
      <h1>Word Associations Map</h1>
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <button onClick={getAssociations}>Find Associations</button>
      {associations &&
        (Object.keys(associations).length === 0 ? (
          <p>No results</p>
        ) : (
          <div>
            {associations[0].items.map(({ item, weight }) => {
              return (
                <span style={{ fontSize: Math.pow(weight, 2) / 200 }}>
                  {item}{" "}
                </span>
              );
            })}
          </div>
        ))}
    </div>
  );
}

export default App;

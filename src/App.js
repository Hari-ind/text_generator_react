import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  //console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount >= 8) {
      setText(data);
    }
    if (amount < 0) {
      amount = 1;
      setText(data.slice(0, amount));
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>tired of lorem epsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="count">paragraphs</label>
        <input
          type="number"
          name="count"
          id="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;

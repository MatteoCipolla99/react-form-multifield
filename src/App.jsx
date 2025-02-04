import { useState } from "react";

export default function App() {
  const [productName, setProductName] = useState("");
  const [List, setList] = useState(["Mele", "Arance", "Banane"]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setList((current) => [...current, productName]);

    setProductName("");
  };

  return (
    <div className="container">
      <h1>Lista della spesa</h1>
      <ul>
        {List.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
      <hr />
      <h3>Aggiungi prodotto</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <button type="submit">invia</button>
      </form>
    </div>
  );
}

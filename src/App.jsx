import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    productName: "",
    author: "",
    content: "",
    category: "FrontEnd",
  });

  const handleFormField = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setList((currentList) => [...currentList, formData]);

    setFormData({
      productName: "",
      author: "",
      content: "",
      category: "",
    });
  };

  const [list, setList] = useState([
    {
      productName: "Mele",
      author: "Matteo",
      content: "Frutta autunnale",
      category: "FrontEnd",
    },
    {
      productName: "Arance",
      author: "Michele",
      content: "Frutta invernale",
      category: "BackEnd",
    },
    {
      productName: "Banane",
      author: "Giacomo",
      content: "Frutta stagionale",
      category: "UI/UX",
    },
  ]);

  return (
    <div className="container">
      <h1>Lista della spesa</h1>
      <ul>
        {list.map((item, index) => (
          <div key={index}>
            <li>
              <strong>{item.productName}</strong> - {item.author} (
              {item.category})<p>{item.content}</p>
            </li>
          </div>
        ))}
      </ul>
      <hr />
      <h3>Aggiungi prodotto</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleFormField}
          placeholder="Nome prodotto "
          required
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleFormField}
          placeholder="Autore"
          required
        />
        <input
          type="text"
          name="content"
          value={formData.content}
          onChange={handleFormField}
          placeholder="Descrizione"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleFormField}
          required
        >
          <option value="FrontEnd">FrontEnd</option>
          <option value="BackEnd">BackEnd</option>
          <option value="UI/UX">UI/UX</option>
        </select>
        <button type="submit">invia</button>
      </form>
    </div>
  );
}

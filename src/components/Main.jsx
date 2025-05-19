import React, { useState } from "react";
import data from "../data.json";

function Main() {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("all");

  const toggleActive = (id) => {
    const updated = extensions.map(item =>
      item.id === id ? { ...item, isActive: !item.isActive } : item
    );
    setExtensions(updated);
  };

  // Filter items to show based on filter state
  const filteredExtensions = extensions.filter(item => {
    if (filter === "all") return true;
    if (filter === "active") return item.isActive;
    if (filter === "inactive") return !item.isActive;
    return true;
  });

  const handleRemove = (id) => {
    const updated = extensions.filter(item => item.id !== id);
    setExtensions(updated);
  };

  return (
    <main className="main">
      <div className="main__container">
        <div className="main__header">
          <h1>Extensions List</h1>
          <div className="main__buttons">
            <button
              className={`main__active-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`main__active-btn ${filter === "active" ? "active" : ""}`}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={`main__active-btn ${filter === "inactive" ? "active" : ""}`}
              onClick={() => setFilter("inactive")}
            >
              Inactive
            </button>
          </div>
        </div>

        <div className="items">
          {filteredExtensions.map(item => (
            <div className="items__item" key={item.id}>
              <div className="items__content">
                <img src={item.logo} alt={item.name} className="items__logos" />
                <div className="items__details">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              </div>

              <div className="items__buttons-wrapper">
                <div className="items__actions">
                  <button className="items__remove" onClick={() => handleRemove(item.id)}>Remove</button>
                  <label className="items__toggle">
                    <input
                      type="checkbox"
                      checked={item.isActive}
                      onChange={() => toggleActive(item.id)}
                    />
                    <span className="items__slider"></span>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;

// components/ItemsPage.jsx
import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import "./items-page.css";

function ItemsPage({ title, initialItems }) {
  const [items, setItems] = useState(initialItems);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // Add or Edit item
  const handleAddOrEdit = (item) => {
    if (editItem) {
      setItems(items.map(i => i.id === item.id ? item : i));
    } else {
      const newItem = { ...item, id: Date.now() }; // unique ID
      setItems([...items, newItem]);
    }
    setShowForm(false);
    setEditItem(null);
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter(i => i.id !== id));
    }
  };

  return (
    <div className="items-page">
      <h1>{title}</h1>
      <button className="add-btn" onClick={() => setShowForm(true)}>
        Add New {title.slice(0, -1)}
      </button>

      {showForm && (
        <AddItemForm
          onSubmit={handleAddOrEdit}
          onClose={() => setShowForm(false)}
          existingItem={editItem}
        />
      )}

      <div className="items-grid">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="item-buttons">
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemsPage;

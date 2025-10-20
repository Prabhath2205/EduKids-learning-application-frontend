// components/AddItemForm.jsx
import React, { useState } from "react";
import "./AddItemForm.css";

function AddItemForm({ onSubmit, onClose, existingItem }) {
  const [name, setName] = useState(existingItem ? existingItem.name : "");
  const [image, setImage] = useState(existingItem ? existingItem.image : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    onSubmit({ id: existingItem?.id || Date.now(), name, image });
  };

  return (
    <div className="form-overlay">
      <form className="add-item-form" onSubmit={handleSubmit}>
        <h2>{existingItem ? "Edit Item" : "Add Item"}</h2>
        <input
          type="text"
          placeholder="Name / Label"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <div className="form-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddItemForm;

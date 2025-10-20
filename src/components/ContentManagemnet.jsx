import React, { useState } from 'react';
import AddNewItem from './AddNewItem';
import './ContentManagement.css';

const ContentManagement = () => {
    const [items, setItems] = useState([
        { id: '1', title: 'A', category: 'Alphabets', image: '' },
        { id: '2', title: 'Apple', category: 'Words', image: '' },
    ]);

    const [showAddForm, setShowAddForm] = useState(false);

    const addItem = (newItem) => setItems([...items, newItem]);

    return (
        <div className="content-management">
            <div className="section-header">
                <h1>Content Management</h1>
                <button className="btn btn-add" onClick={() => setShowAddForm(true)}>Add New</button>
            </div>

            {showAddForm && (
                <AddNewItem
                    onAddItem={addItem}
                    onClose={() => setShowAddForm(false)}
                />
            )}

            <div className="content-grid">
                {items.map(item => (
                    <div key={item.id} className="content-card">
                        <img src={item.image || 'placeholder.png'} alt={item.title} />
                        <h4>{item.title}</h4>
                        <span>{item.category}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentManagement;

import React, { useState } from 'react';


const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

    /* --- Page Container --- */
    .admin-words-page {
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(135deg, #e0f7fa 0%, #fef9c3 100%);
        padding: 40px;
        min-height: 100%;
        box-sizing: border-box;
    }

    /* --- Header --- */
    .words-header {
        background-color: #ffffff;
        border-radius: 12px;
        padding: 20px 30px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        display: flex;
        justify-content: space-between; /* Aligns items to the sides */
        align-items: center;
        margin-bottom: 30px;
    }

    .words-header h1 {
        font-size: 28px;
        font-weight: 700;
        color: #1f2937;
        margin: 0;
    }

    .btn-add-new {
        background-color: #22c55e; /* Green color */
        color: #ffffff;
        border: none;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .btn-add-new:hover {
        background-color: #16a34a;
    }

    /* --- Word Cards Grid --- */
    .words-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 30px;
    }

    .word-card {
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
        padding: 20px;
        text-align: center;
        border: 1px solid #e5e7eb;
    }
    
    .word-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }

    .word-card img {
        width: 100%;
        height: 120px;
        object-fit: contain;
        margin-bottom: 15px;
    }

    .word-card h3 {
        font-size: 18px;
        color: #333;
        margin: 0 0 15px;
        font-weight: 600;
    }

    .word-card-actions {
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .btn-edit, .btn-delete {
        padding: 8px 16px;
        border-radius: 6px;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        border: 1px solid;
    }

    .btn-edit {
        background-color: #3b82f6;
        color: #ffffff;
        border-color: #3b82f6;
    }

    .btn-delete {
        background-color: #ef4444;
        color: #ffffff;
        border-color: #ef4444;
    }

    /* --- Modal Styles --- */
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background: white;
        padding: 30px;
        border-radius: 12px;
        width: 100%;
        max-width: 450px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    .modal-content h2 {
        font-size: 22px;
        margin-top: 0;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
    }

    .form-group input[type="text"],
    .form-group input[type="file"] {
        width: 100%;
        padding: 10px;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        box-sizing: border-box;
    }
    
    .image-preview {
        margin-top: 15px;
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
    }

    .modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 20px;
    }
    
    .btn-save {
        background-color: #16a34a;
        color: white;
    }
    
    .btn-cancel {
        background-color: #6b7280;
        color: white;
    }
`;

// --- Mock Data ---
const initialWords = [
    { id: 1, title: 'Apple', image: 'https://placehold.co/150x150/f87171/ffffff?text=Apple&font=poppins' },
    { id: 2, title: 'Ball', image: 'https://placehold.co/150x150/60a5fa/ffffff?text=Ball&font=poppins' },
];

function AdminWords() {
    const [words, setWords] = useState(initialWords);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingWord, setEditingWord] = useState(null);
    const [newWordTitle, setNewWordTitle] = useState('');
    const [newWordImage, setNewWordImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const handleOpenModal = (word = null) => {
        if (word) {
            setEditingWord(word);
            setNewWordTitle(word.title);
            setImagePreview(word.image);
        } else {
            setEditingWord(null);
            setNewWordTitle('');
            setImagePreview('');
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewWordImage(null);
        setImagePreview('');
    };
    
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setNewWordImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSave = () => {
        if (editingWord) {
            // Edit existing word
            setWords(words.map(w => w.id === editingWord.id ? { ...w, title: newWordTitle, image: imagePreview } : w));
        } else {
            // Add new word
            const newId = words.length > 0 ? Math.max(...words.map(w => w.id)) + 1 : 1;
            setWords([...words, { id: newId, title: newWordTitle, image: imagePreview }]);
        }
        handleCloseModal();
    };

    const handleDelete = (wordId) => {
        if (window.confirm("Are you sure you want to delete this word?")) {
            setWords(words.filter(w => w.id !== wordId));
        }
    };

    return (
        <>
            <style>{styles}</style>
            <div className="admin-words-page">
                <div className="words-header">
                    <h1>Manage Words</h1>
                    <button className="btn-add-new" onClick={() => handleOpenModal()}>
                        <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20"><path d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1Z"/></svg>
                        Add New Word
                    </button>
                </div>

                <div className="words-grid">
                    {words.map(word => (
                        <div key={word.id} className="word-card">
                            <img src={word.image} alt={word.title} />
                            <h3>{word.title}</h3>
                            <div className="word-card-actions">
                                <button className="btn-edit" onClick={() => handleOpenModal(word)}>Edit</button>
                                <button className="btn-delete" onClick={() => handleDelete(word.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <h2>{editingWord ? 'Edit Word' : 'Add New Word'}</h2>
                        <div className="form-group">
                            <label htmlFor="wordTitle">Title</label>
                            <input
                                type="text"
                                id="wordTitle"
                                value={newWordTitle}
                                onChange={(e) => setNewWordTitle(e.target.value)}
                                placeholder="e.g., Apple"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="wordImage">Image</label>
                             <input
                                type="file"
                                id="wordImage"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview"/>}
                        </div>
                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={handleCloseModal}>Cancel</button>
                            <button className="btn-save" onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AdminWords;

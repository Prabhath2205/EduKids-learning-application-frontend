import React, { useEffect, useState } from 'react';
import './Users.css';
import API_URL from './config';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('adminToken') || localStorage.getItem('token');
            const res = await fetch(`${API_URL}/api/users`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            setUsers(data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching users:', err);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="users-page">
                <h1 className="section-title">Loading...</h1>
            </div>
        );
    }

    return (
        <div className="users-page">
            <h1 className="section-title">Registered Users ({users.length})</h1>
            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Child Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u, index) => (
                            <tr key={u._id}>
                                <td>U{String(index + 1).padStart(3, '0')}</td>
                                <td>{u.childname}</td>
                                <td>{u.role}</td>
                                <td>{u.email}</td>
                                <td>{u.phonenumber}</td>
                                <td>{new Date(u.dob).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
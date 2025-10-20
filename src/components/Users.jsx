import React from 'react';
import './Users.css';

const Users = () => {
    const users = [
        { id: 'U001', childName: 'Johnny', role: 'Student', email: 'johnny@gmail.com', phone: '9876543210', dob: '2018-06-15' },
        { id: 'U002', childName: 'Emily', role: 'Student', email: 'emily@gmail.com', phone: '9876501234', dob: '2017-11-20' },
    ];

    return (
        <div className="users-page">
            <h1 className="section-title">Registered Users</h1>
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
                    {users.map(u => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.childName}</td>
                            <td>{u.role}</td>
                            <td>{u.email}</td>
                            <td>{u.phone}</td>
                            <td>{u.dob}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;

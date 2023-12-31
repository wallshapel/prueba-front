import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://127.0.0.1:8000/api/')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleDelete = (userId) => {
    axios.delete(`http://127.0.0.1:8000/api/delete/${userId}`)
      .then(response => {
        console.log('User deleted:', response.data);
        // Remove the deleted user from the list
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Users</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          { users.map(user => (
            <User key={ user.id } user={ user } handleDelete={ handleDelete } />
          )) }
        </tbody>
      </table>
    </div>
  );
};

export default Users;

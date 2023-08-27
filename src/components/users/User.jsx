import React from 'react';

const User = ({ user, handleDelete }) => {
  return (
    <tr>
      <td>{ user.name }</td>
      <td>{ user.email }</td>
      <td>
        <button className="btn btn-danger" onClick={ () => handleDelete(user.id) }>Delete</button>
      </td>
    </tr>
  );
};

export default User;

import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/register/', formData)
      .then(response => {
        console.log('Usuario registrado:', response.data);
        window.location.href = '/users'; 
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.errors) {
          setErrors(error.response.data.errors);
        } else {
          console.error('Error al registrar el usuario:', error);
        }
      });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} name="name" value={formData.name} onChange={handleChange} autoFocus />
          {errors.name && <div className="invalid-feedback">{errors.name[0]}</div>}
        </div>
        
        <div className="form-group">
          <label>Email:</label>
          <input type="text" className={`form-control ${errors.email ? 'is-invalid' : ''}`} name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="invalid-feedback">{errors.email[0]}</div>}
        </div>
        
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <div className="invalid-feedback">{errors.password[0]}</div>}
        </div>
        
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`} name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} />
          {errors.password_confirmation && <div className="invalid-feedback">{errors.password_confirmation[0]}</div>}
        </div>
        
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;

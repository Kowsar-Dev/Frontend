import React, { useState } from 'react';
import { useAddUserMutation } from '../features/api/apiSlice';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [addUser] = useAddUserMutation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    await addUser(formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />
      <br /><br />
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;

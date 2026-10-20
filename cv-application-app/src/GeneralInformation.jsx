import React, { useState } from 'react';

export default function GeneralInfomation({ initialData, onSave }) {
  const [generalInfo, setGeneralInfo] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(generalInfo);
  };

  return (
    <form className="section-form" onSubmit={handleSubmit}>
      <h2>General Information</h2>

      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={generalInfo.fullName}
          onChange={handleChange}
          placeholder="John Doe"
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Professional Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={generalInfo.title}
          onChange={handleChange}
          placeholder="Frontend Web Developer"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={generalInfo.email}
            onChange={handleChange}
            placeholder="johndoe@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={generalInfo.phone}
            onChange={handleChange}
            placeholder="+123 456 7890"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={generalInfo.location}
          onChange={handleChange}
          placeholder="City, Country"
        />
      </div>

      <div className="form-group">
        <label htmlFor="summary">Professional Summary</label>
        <textarea
          id="summary"
          name="summary"
          rows="4"
          value={generalInfo.summary}
          onChange={handleChange}
          placeholder="Brief summary highlighting key qualifications..."
        />
      </div>

      <button type="submit" className="btn-save">
        Update General Info
      </button>
    </form>
  );
}
import React, { useState } from 'react';

export default function Experience({ initialData, onSave }) {
  const [experienceList, setExperienceList] = useState(initialData);

  const handleChange = (index, field, value) => {
    setExperienceList((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const addExperience = () => {
    const newItem = {
      id: Date.now(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    };
    setExperienceList((prev) => [...prev, newItem]);
  };

  const removeExperience = (id) => {
    setExperienceList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(experienceList);
  };

  return (
    <form className="section-form" onSubmit={handleSubmit}>
      <h2>Practical Experience</h2>

      {experienceList.map((exp, index) => (
        <div key={exp.id || index} className="item-card">
          <div className="item-card-header">
            <h3>Position #{index + 1}</h3>
            {experienceList.length > 1 && (
              <button
                type="button"
                className="btn-delete"
                onClick={() => removeExperience(exp.id)}
              >
                Delete
              </button>
            )}
          </div>

          <div className="form-group">
            <label>Company / Organization</label>
            <input
              type="text"
              value={exp.company}
              onChange={(e) => handleChange(index, 'company', e.target.value)}
              placeholder="Tech Corp Inc."
            />
          </div>

          <div className="form-group">
            <label>Position Title</label>
            <input
              type="text"
              value={exp.position}
              onChange={(e) => handleChange(index, 'position', e.target.value)}
              placeholder="Software Engineer"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="text"
                value={exp.startDate}
                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                placeholder="MM/YYYY"
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="text"
                value={exp.endDate}
                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                placeholder="MM/YYYY or Present"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={exp.location}
              onChange={(e) => handleChange(index, 'location', e.target.value)}
              placeholder="San Francisco, CA"
            />
          </div>

          <div className="form-group">
            <label>Description & Key Responsibilities</label>
            <textarea
              rows="4"
              value={exp.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
              placeholder="• Built scalable web applications..."
            />
          </div>
        </div>
      ))}

      <div className="button-group">
        <button type="button" className="btn-add" onClick={addExperience}>
          + Add Experience
        </button>
        <button type="submit" className="btn-save">
          Update Experience
        </button>
      </div>
    </form>
  );
}
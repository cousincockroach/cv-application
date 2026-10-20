import React, { useState } from 'react';

export default function Education({ initialData, onSave }) {
  const [educationList, setEducationList] = useState(initialData);

  const handleChange = (index, field, value) => {
    setEducationList((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const addEducation = () => {
    const newItem = {
      id: Date.now(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    };
    setEducationList((prev) => [...prev, newItem]);
  };

  const removeEducation = (id) => {
    setEducationList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(educationList);
  };

  return (
    <form className="section-form" onSubmit={handleSubmit}>
      <h2>Educational Background</h2>

      {educationList.map((edu, index) => (
        <div key={edu.id || index} className="item-card">
          <div className="item-card-header">
            <h3>Education #{index + 1}</h3>
            {educationList.length > 1 && (
              <button
                type="button"
                className="btn-delete"
                onClick={() => removeEducation(edu.id)}
              >
                Delete
              </button>
            )}
          </div>

          <div className="form-group">
            <label>School / University</label>
            <input
              type="text"
              value={edu.school}
              onChange={(e) => handleChange(index, 'school', e.target.value)}
              placeholder="Harvard University"
            />
          </div>

          <div className="form-group">
            <label>Degree / Field of Study</label>
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => handleChange(index, 'degree', e.target.value)}
              placeholder="B.S. in Computer Science"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="text"
                value={edu.startDate}
                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                placeholder="MM/YYYY"
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="text"
                value={edu.endDate}
                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                placeholder="MM/YYYY or Present"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={edu.location}
              onChange={(e) => handleChange(index, 'location', e.target.value)}
              placeholder="Cambridge, MA"
            />
          </div>
        </div>
      ))}

      <div className="button-group">
        <button type="button" className="btn-add" onClick={addEducation}>
          + Add Education
        </button>
        <button type="submit" className="btn-save">
          Update Education
        </button>
      </div>
    </form>
  );
}
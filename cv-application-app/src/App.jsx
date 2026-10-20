import React, { useState } from 'react';
import GeneralInformation from './GeneralInformation.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import './App.css';

const defaultGeneral = {
  fullName: 'John Doe',
  title: 'Junior Software Engineer',
  email: 'john.doe@example.com',
  phone: '+27 123 456789',
  location: 'Cape Town, South Africa',
  summary:
    'Dedicated Junior Software Engineer building modern web applications.',
};

const defaultEducation = [
  {
    id: 1,
    school: 'University of Cape Town',
    degree: 'BSc. Computer Science',
    startDate: '2016',
    endDate: '2020',
    location: 'Cape Town',
  },
];

const defaultExperience = [
  {
    id: 1,
    company: 'Tech Solutions Inc.',
    position: 'Frontend Developer',
    startDate: '2020',
    endDate: 'Present',
    location: 'Cape Town, South Africa',
    description:
      'Developed responsive user interfaces with React and Tailwind CSS.',
  },
];

export default function App() {
  const [cvData, setCvData] = useState({
    general: defaultGeneral,
    education: defaultEducation,
    experience: defaultExperience,
  });

  const updateGeneralInfo = (newGeneralData) => {
    setCvData((prev) => ({
      ...prev,
      general: newGeneralData,
    }));
  };

  const updateEducation = (newEducationList) => {
    setCvData((prev) => ({
      ...prev,
      education: newEducationList,
    }));
  };

  const updateExperience = (newExperienceList) => {
    setCvData((prev) => ({
      ...prev,
      experience: newExperienceList,
    }));
  };

  return (
    <div className="cv-app">
      <div className="builder-forms">
        <h1 className="app-heading">CV Builder</h1>
        <GeneralInformation
          initialData={cvData.general}
          onSave={updateGeneralInfo}
        />
        <Education
          initialData={cvData.education}
          onSave={updateEducation}
        />
        <Experience
          initialData={cvData.experience}
          onSave={updateExperience}
        />
      </div>

      <div className="preview-container">
        <div className="cv-document">
          <header className="cv-header">
            <h1>{cvData.general.fullName || 'Your Name'}</h1>
            {cvData.general.title && (
              <p className="cv-subtitle">{cvData.general.title}</p>
            )}
            <div className="cv-contact">
              {cvData.general.email && <span>{cvData.general.email}</span>}
              {cvData.general.phone && <span>{cvData.general.phone}</span>}
              {cvData.general.location && <span>{cvData.general.location}</span>}
            </div>
          </header>

          {cvData.general.summary && (
            <section className="cv-section">
              <h2>Professional Summary</h2>
              <p className="cv-summary">{cvData.general.summary}</p>
            </section>
          )}

          {cvData.experience.length > 0 && (
            <section className="cv-section">
              <h2>Experience</h2>
              {cvData.experience.map((exp, index) => (
                <div key={exp.id || index} className="cv-item">
                  <div className="cv-item-header">
                    <div>
                      <strong>{exp.position || 'Position Title'}</strong>
                      {exp.company && (
                        <span className="company-name"> | {exp.company}</span>
                      )}
                    </div>
                    <div className="cv-dates">
                      {exp.startDate} {exp.startDate && exp.endDate ? '–' : ''}{' '}
                      {exp.endDate}
                    </div>
                  </div>
                  {exp.location && (
                    <div className="cv-location">{exp.location}</div>
                  )}
                  {exp.description && (
                    <p className="cv-description">{exp.description}</p>
                  )}
                </div>
              ))}
            </section>
          )}

          {cvData.education.length > 0 && (
            <section className="cv-section">
              <h2>Education</h2>
              {cvData.education.map((edu, index) => (
                <div key={edu.id || index} className="cv-item">
                  <div className="cv-item-header">
                    <div>
                      <strong>{edu.degree || 'Degree'}</strong>
                      {edu.school && (
                        <span className="school-name"> | {edu.school}</span>
                      )}
                    </div>
                    <div className="cv-dates">
                      {edu.startDate} {edu.startDate && edu.endDate ? '–' : ''}{' '}
                      {edu.endDate}
                    </div>
                  </div>
                  {edu.location && (
                    <div className="cv-location">{edu.location}</div>
                  )}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
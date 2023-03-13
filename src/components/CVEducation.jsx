import { useState } from "react";
import '../styles/CVEducation.css';

export default function CVEducation() {
  const [isEditable, setIsEditable] = useState(false);
  const [educationEntries, setEducationEntries] = useState([
    {
      institutionName: 'Institution name',
      studyDate: 'From - To (MM-YYYY - MM-YYY)',
      degreeTitle: 'Degree title'
    }
  ]);
  const [institutionName, setInstitutionName] = useState('');
  const [studyDate, setStudyDate] = useState('');
  const [studyDateError, setStudyDateError] = useState('');
  const [degreeTitle, setDegreeTitle] = useState('');

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  };

  const handleAddEducation = () => {
    if (!institutionName || !studyDate || !degreeTitle) {
      alert('Please fill in all required fields');
      return;
    }

    if (!/^([0-9]{2})\.([0-9]{4})\s*-\s*([0-9]{2})\.([0-9]{4})$/.test(studyDate)) {
      setStudyDateError('Invalid format (MM.YYYY - MM.YYYY)');
      return;
    } else {
      setStudyDateError('');
    }

    const newEducation = {
      institutionName: institutionName,
      studyDate: studyDate,
      degreeTitle: degreeTitle
    };
    
    setEducationEntries([...educationEntries, newEducation]);
    setInstitutionName('');
    setStudyDate('');
    setDegreeTitle('')
  }

  const handleDeleteEducation = (index) => {
    const updatedEducationEntries = [...educationEntries];
    updatedEducationEntries.splice(index, 1);
    setEducationEntries(updatedEducationEntries);
  }

  return (
    <section className="education-section">
      <h3 className="education-title">Education</h3>
      <ul>
        {educationEntries.map((education, index) => (
          <li key={index}>
            <p>{education.institutionName}</p>
            <p>{education.studyDate}</p>
            <p>{education.degreeTitle}</p>
            <button type="button" className='remove-button' onClick={() => handleDeleteEducation(index)}>Remove entry</button>
          </li>
        ))}
      </ul>
      {isEditable && (
        <div className='education-info-edit'>
          <form action="">
            <label htmlFor="institution-name">Institution name:</label>
            <input
              type="text"
              placeholder="Institution name..."
              id="institution-name"
              name="institution-name"
              onChange={e => setInstitutionName(e.target.value)}
            />
            <label htmlFor="study-date">Study date:</label>
            <input
              type="text"
              placeholder="Study date... (Format: MM.YYYY - MM.YYYY)"
              id="study-date"
              name="study-date"
              onChange={e => setStudyDate(e.target.value)}
            />
            <span className="error">{studyDateError.length > 0 ? studyDateError : ''}</span>
            <label htmlFor="degree-title">Degree title:</label>
            <input
              type="text"
              placeholder="Degree title..."
              id="degree-title"
              name="degree-title"
              onChange={e => setDegreeTitle(e.target.value)}
            />
            <button type="button" className='add-button' onClick={handleAddEducation}>Add education</button>
          </form>
        </div>
      )}
      <button className='edit-button' onClick={handleEditToggle}>{isEditable ? 'Save' : 'Edit'}</button>
    </section>
  );
}
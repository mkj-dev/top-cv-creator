import { useState } from "react";
import '../styles/CVExperience.css';

export default function CVExperience() {
  const [isEditable, setIsEditable] = useState(false);
  const [workplaces, setWorkplaces] = useState([{
    companyName: 'Company name',
    employedSinceDate: 'Employed since',
    employedToDate: 'Employed To',
    jobDescription: 'Short job description.'
  }]);
  const [companyName, setCompanyName] = useState('');
  const [employedSinceDate, setEmployedSinceDate] = useState('');
  const [employedToDate, setEmployedToDate] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  }

  const handleIsWorking = () => {
    const employedTo = document.getElementById('employed-to');
    const stillWorking = document.getElementById('still-working');

    if (stillWorking.checked === true) {
      employedTo.disabled = true;
    } else if (!stillWorking.checked) {
      employedTo.disabled = false;
    }
  }

  const handleAddWorkplace = () => {
    if (!companyName || !employedSinceDate || !jobDescription) {
      alert('Please fill in all required fields');
      return;
    }

    const newWorkplace = {
      companyName: companyName,
      employedSinceDate: employedSinceDate,
      employedToDate: employedToDate,
      jobDescription: jobDescription
    };

    setWorkplaces([...workplaces, newWorkplace]);
    setCompanyName('');
    setEmployedSinceDate('');
    setEmployedToDate('');
    setJobDescription('');
  }

  const handleDeleteWorkplace = (index) => {
    const updatedWorkplaces = [...workplaces];
    updatedWorkplaces.splice(index, 1);
    setWorkplaces(updatedWorkplaces);
  }

  return (
    <section className="experience-section">
      <h3 className="experience-title">Experience</h3>
      <ul>
        {workplaces.map((workplace, index) => (
          <li key={index}>
            <p>{workplace.companyName}</p>
            <p>{workplace.employedSinceDate} - {workplace.employedToDate.length > 0 ? workplace.employedToDate : 'Currently'}</p>
            <p>{workplace.jobDescription}</p>
            <button type="button" className="remove-button" onClick={() => handleDeleteWorkplace(index)}>Remove entry</button>
          </li>
        ))}
      </ul>
      {isEditable && (
        <div className="experience-info-edit">
          <form action="#">
            <label htmlFor="company-name">Company name:</label>
            <input
              type="text"
              id="company-name"
              name="company-name"
              placeholder="Company name..."
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
            />
            <label htmlFor="employed-from">Employed since:</label>
            <input
              type="date"
              id="employed-from"
              name="employed-from"
              value={employedSinceDate}
              onChange={e => setEmployedSinceDate(e.target.value)}
            />
            <label htmlFor="employed-to">To:</label>
            <input
              type="date"
              id="employed-to"
              name="employed-to"
              value={employedToDate}
              onChange={e => setEmployedToDate(e.target.value)}
            />
            {/* Still working checkbox*/}
            <input
              type="checkbox"
              name="still-working"
              id="still-working"
              style={{ display: 'inline-block' }}
              onClick={handleIsWorking}
            />
            <label htmlFor="still-working">Current workplace</label>
            {/* Job description */}
            <label htmlFor="job-description" style={{ display: 'block' }}>Short job description:</label>
            <textarea
              name="job-description"
              id="job-description"
              cols="30"
              rows="10"
              placeholder="Add a short job description..."
              onChange={e => setJobDescription(e.target.value)}>
            </textarea>
            <button type="button" className='add-button' onClick={handleAddWorkplace}>Add new workplace</button>
          </form>
        </div>
      )}
      <button className='edit-button' onClick={handleEditToggle}>{isEditable ? 'Save' : 'Edit'}</button>
    </section>
  );
}
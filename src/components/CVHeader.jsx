import { useState } from 'react';
import '../styles/CVHeader.css';

export default function CVHeader() {
  const [firstName, setFirstName] = useState('First name');
  const [lastName, setLastName] = useState('Last name');
  const [jobTitle, setJobTitle] = useState('Job title');
  const [isEditable, setIsEditable] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  };

  return (
    <>
      <header>
        <h2 className='first-name'>{firstName}</h2>
        <h2 className='last-name'>{lastName}</h2>
        <h3 className='job-title'>{jobTitle}</h3>
        {isEditable && (
          <div className='edit-header-info'>
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
            <input type="text" value={lastName} onChange={handleLastNameChange} />
            <input type="text" value={jobTitle} onChange={handleJobTitleChange} />
          </div>
        )}
        <button className='edit-button' onClick={handleEditToggle}>{isEditable ? 'Save' : 'Edit'}</button>
      </header>
    </>
  );
} 
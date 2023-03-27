// @ts-nocheck
import { useState, useRef } from "react";
import '../../styles/CVAbout.css'

export default function CVAbout() {
  const defaultInfoTxt = 'Click the edit button below to add information about yourself.';
  const editAboutMeBtnRef = useRef(null);

  const [isEditable, setIsEditable] = useState(false);
  const [aboutMeInfo, setAboutMeInfo] = useState(defaultInfoTxt);
  const [aboutMeError, setAboutMeError] = useState('');
  

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  }

  const handleCancel = () => {
    editAboutMeBtnRef.current.disabled = false;
    setAboutMeInfo(defaultInfoTxt);
    setAboutMeError('');
    setIsEditable(!isEditable);
  }

  const handleAboutMeInfoChange = (event) => {
    const minCharLength = 10;

    if (event.target.value.length < minCharLength) {
      setAboutMeError(`You need ${minCharLength - event.target.value.length} more characters to save input.`);
      editAboutMeBtnRef.current.disabled = true;
      editAboutMeBtnRef.current.innerText = 'Disabled';
    } else {
      editAboutMeBtnRef.current.disabled = false;
      editAboutMeBtnRef.current.innerText = 'Save';
      setAboutMeError('');
      setAboutMeInfo(event.target.value);
    }
  }

  return (
    <section className="about-section">
      <h3 className="about-title">About Me</h3>
      <p className="about-para">{aboutMeInfo}</p>
      <p className="error">{aboutMeError}</p>
      {isEditable && (
        <div className="about-info-edit">
          <textarea
            cols="30"
            rows="10"
            placeholder="Introduce yourself..."
            onChange={handleAboutMeInfoChange}>
          </textarea>
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      )}
      <button className='edit-button' onClick={handleEditToggle}  ref={editAboutMeBtnRef} >{isEditable ? 'Save' : 'Edit'}</button>
    </section>
  );
}
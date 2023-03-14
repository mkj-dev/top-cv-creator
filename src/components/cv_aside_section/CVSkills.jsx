import { useRef, useState } from 'react';

export default function CVSkills() {
  const [isEditable, setIsEditable] = useState(false);
  const [skills, setSkills] = useState(['Skill 1', 'Skill 2']);
  const newSkillRef = useRef(null);
  const [inputError, setInputError] = useState('');

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  }
  
  function handleNewSkill(event) {
    newSkillRef.current = event.target.value;
    setInputError('');
  }

  const addSkill = (event) => {
    event.preventDefault();
    const newSkill = newSkillRef.current.trim();
    if (!newSkill) {
      setInputError('Please enter a skill name');
      return;
    }
    if (skills.includes(newSkill)) {
      setInputError('This skill already exists');
      return;
    }
    setSkills([...skills, newSkill]);
    newSkillRef.current = '';
  }

  return (
    <section id='skills-section'>
      <h3 className='skills-title'>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      {isEditable && (
        <form onSubmit={addSkill}>
          <label htmlFor="new-skill">New Skill:</label>
          <input type="text" id='new-skill' name='new-skill' onChange={handleNewSkill} />
          {inputError && <p className="error">{inputError}</p>}
          <button type="submit" className='add-button'>Add skill</button>
        </form>
      )}
      <button className='edit-button' onClick={handleEditToggle}>{isEditable ? 'Save' : 'Edit'}</button>
    </section>
  );
}
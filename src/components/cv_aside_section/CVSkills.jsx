import { useState } from 'react';

export default function CVSkills() {
  const [isEditable, setIsEditable] = useState(false);
  const [skills, setSkills] = useState(['Skill 1', 'Skill 2']);
  const [skillName, setSkillName] = useState('');

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  }

  function handleNewSkill(event) {
    setSkillName(event);
  }

  const addSkill = (skill) => {
    const newSkill = skill;
    setSkills([...skills, newSkill]);
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
        <form action="">
          <label htmlFor="new-skill">New Skill:</label>
          <input type="text" id='new-skill' name='new-skill' onChange={e => handleNewSkill(e.target.value)} />
          <button type="button" className='add-button' onClick={() => addSkill(skillName)}>Add skill</button>
        </form>
      )}
      <button className='edit-button' onClick={handleEditToggle}>{isEditable ? 'Save' : 'Edit'}</button>
    </section>
  );
}
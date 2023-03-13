import { useState } from 'react';

export default function CVSkills() {
  const [isEditable, setIsEditable] = useState(false);
  const [skills, setSkills] = useState(['Skill 1', 'Skill 2']);

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  }

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  return (
    <section id='skills-section'>
      <h3 className='skills-title'>Skills</h3>
      {!isEditable && (
        <>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          {/* <input
                  type='text'
                  value={skill}
                  onChange={(event) => handleSkillChange(index, event.target.value)}
                /> 
            */}
          <button onClick={handleAddSkill}>Add Skill</button>
        </>
      )}
      <button className='edit-button' onClick={handleEditToggle}>{isEditable ? 'Save' : 'Edit'}</button>
    </section>
  );
}
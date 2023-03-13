import { useState } from 'react';

export default function CVContact() {
  const [isEditable, setIsEditable] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    mobile: '123456789',
    email: 'your@email.com',
    linkedin: 'https://www.linkedin.com/in/profile',
  });

  const handleContactInfoChange = (event, field) => {
    const updatedContactInfo = { ...contactInfo };
    updatedContactInfo[field] = event.target.value;
    setContactInfo(updatedContactInfo);
  }

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  }

  return (
    <section id='contact-section'>
      <h3 className='contact-title'>Contact</h3>
      {!isEditable && (
        <>
          <p>Mobile: {contactInfo.mobile}</p>
          <p>Email: {contactInfo.email}</p>
          <a href={contactInfo.linkedin} target='_blank'>LinkedIn Profile</a>
        </>
      )}
      {isEditable && (
        <>
          <input
            type='tel'
            placeholder='Mobile'
            value={contactInfo.mobile}
            onChange={(event) => handleContactInfoChange(event, 'mobile')}
            required
          />
          <input
            type='email'
            placeholder='Email'
            value={contactInfo.email}
            onChange={(event) => handleContactInfoChange(event, 'email')}
            required
          />
          <input
            type='url'
            placeholder='LinkedIn profile link'
            value={contactInfo.linkedin}
            onChange={(event) => handleContactInfoChange(event, 'linkedin')}
            required
          />
        </>
      )}
      <button className='edit-button' onClick={handleEditToggle}>{isEditable ? 'Save' : 'Edit'}</button>
    </section>
  );
}
// @ts-nocheck
import { useState } from "react";

export default function CVContact({ inputError, onInputErrorChange }) {

  const [isEditable, setIsEditable] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    mobile: "0123456789",
    email: "you@example.com",
    linkedin: "https://www.linkedin.com/in/profile",
  });

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  }

  const handleContactInfoChange = (event, field) => {
    const updatedContactInfo = { ...contactInfo };
    updatedContactInfo[field] = event.target.value;
    setContactInfo(updatedContactInfo);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (contactInfo.mobile.trim() === "" || contactInfo.email.trim() === "" || contactInfo.linkedin.trim() === "") {
      onInputErrorChange("Add proper contact info.");
      return;
    }

    onInputErrorChange("");
    console.log("Submitting contact info:", contactInfo);
  }

  return (
    <section className="contact-section">
      <h3 className="contact-title">Contact</h3>
      {!isEditable && (
        <>
          <p>Mobile: {contactInfo.mobile}</p>
          <p>Email: {contactInfo.email}</p>
          <a href={contactInfo.linkedin} target="_blank">LinkedIn Profile</a>
        </>
      )}
      {isEditable && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            placeholder="Telephone number (required)"
            size={24}
            id="mobile"
            title="Minimum length of 9, maximum length of 14. Only numbers."
            value={contactInfo.mobile}
            onChange={(event) => handleContactInfoChange(event, "mobile")}
            minLength={9}
            maxLength={14}
            pattern="\d+"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="you@example.org"
            size={24}
            minLength={4}
            maxLength={64}
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Minimum length of 4, maximum length of 64."
            id="email"
            value={contactInfo.email}
            onChange={(event) => handleContactInfoChange(event, "email")}
            required
          />
          <label htmlFor="linkedin">LinkedIn:</label>
          <input
            type="url"
            placeholder="https://www.linkedin.com/"
            pattern="https://.*"
            size={24}
            minLength={10}
            maxLength={80}
            id="linkedin"
            value={contactInfo.linkedin}
            onChange={(event) => handleContactInfoChange(event, "linkedin")}
            required
          />
          {inputError && <p className="error">{inputError}</p>}
          <button type="submit" className="add-button">Add contact info</button>
        </form>
      )}
      <button className="edit-button" onClick={handleEditToggle}>{isEditable ? "Save" : "Edit"}</button>
    </section>
  );
}
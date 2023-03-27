// @ts-nocheck
import { useState, useRef } from "react";

export default function CVLanguages({ inputError, onInputErrorChange }) {

  const [isEditable, setIsEditable] = useState(false);
  const [languageSkills, setLanguageSkills] = useState(["English - B2", "Spanish - A1"]);
  const newLanguageRef = useRef("");

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  }

  const handleNewLanguage = (event) => {
    newLanguageRef.current = event.target.value;
    onInputErrorChange("");
  }

  const addNewLanguage = (event) => {
    event.preventDefault();
    const newLanguage = newLanguageRef.current.trim();
    if (!newLanguage) {
      onInputErrorChange("Please enter any language.");
      return;
    }
    if (languageSkills.includes(newLanguage)) {
      onInputErrorChange("This language skill already exists.");
      return;
    }
    setLanguageSkills([...languageSkills, newLanguage]);
    newLanguageRef.current = "";
  }

  const deleteLanguage = (index) => {
    const newLanguageSkills = [...languageSkills];
    newLanguageSkills.splice(index, 1);
    setLanguageSkills(newLanguageSkills);
  };

  return (
    <section className="languages-section">
      <h3 className="languages-title">Languages</h3>
      <ul>
        {languageSkills.map((language, index) => (
          <li key={index}>
            {language}
            {isEditable && <button type="button" className="remove-button" onClick={() => deleteLanguage(index)}>Delete</button> }
          </li>
        ))}
      </ul>
      {isEditable && (
        <form onSubmit={addNewLanguage}>
          <label htmlFor="new-language">New language:</label>
          <input type="text" id="new-language" name="new-language" onChange={handleNewLanguage} />
          {inputError && <p className="error">{inputError}</p>}
          <button type="submit" className="add-button">Add language</button>
        </form>
      )}
      <button className="edit-button" onClick={handleEditToggle}>{isEditable ? "Save" : "Edit"}</button>
    </section>
  );
}
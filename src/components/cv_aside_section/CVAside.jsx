// @ts-nocheck
import '../../styles/CVAside.css';
import CVContact from './CVContact';
import CVLanguages from './CVLanguages';
import CVSkills from './CVSkills';
import { useState } from 'react';

export default function CVAside() {
  const [inputError, setInputError] = useState('');

  return (
    <aside className='cv-aside'>
      <CVContact inputError={inputError} onInputErrorChange={setInputError} />
      <CVSkills inputError={inputError} onInputErrorChange={setInputError} />
      <CVLanguages inputError={inputError} onInputErrorChange={setInputError} />
    </aside>
  );
}
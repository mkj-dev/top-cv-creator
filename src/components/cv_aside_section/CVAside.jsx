import '../../styles/CVAside.css';
import CVContact from './CVContact';
import CVLanguages from './CVLanguages';
import CVSkills from './CVSkills';

export default function CVAside() {

  return (
    <aside id='cv-aside'>
      <CVContact />
      <CVSkills />
      <CVLanguages />
    </aside>
  );
}
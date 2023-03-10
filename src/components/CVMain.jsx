import '../styles/CVMain.css';
import CVAbout from './CVAbout';
import CVAside from './CVAside';
import CVExperience from './CVExperience';

export default function CVMain() {
  return (
    <main id="cv-document">
      <section className='cv-main-section'>
        <CVAbout />
        <CVExperience />
      </section>
      <section className='cv-aside-section'>
        <CVAside />
      </section>
    </main>
  );
}
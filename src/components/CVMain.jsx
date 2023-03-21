import '../styles/CVMain.css';
import CVAbout from './cv_main_section/CVAbout';
import CVAside from './cv_aside_section/CVAside';
import CVEducation from './cv_main_section/CVEducation';
import CVExperience from './cv_main_section/CVExperience';
import ToggleButton from './ToggleButton';

export default function CVMain() {
  return (
    <>
      <main id="cv-document">
        <section className='cv-main-section'>
          <CVAbout />
          <CVExperience />
          <CVEducation />
        </section>
        <section className='cv-aside-section'>
          <CVAside />
        </section>
      </main>
      <ToggleButton />
    </>
  );
}
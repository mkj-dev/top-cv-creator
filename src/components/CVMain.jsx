import '../styles/CVMain.css';
import CVAbout from './CVAbout';
import CVAside from './CVAside';

export default function CVMain() {
  return (
    <main id="cv-document">
      <section className='cv-main-section'>
        <CVAbout />
      </section>
      <section className='cv-aside-section'>
        <CVAside />
      </section>
    </main>
  );
}
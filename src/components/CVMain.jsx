import '../styles/CVMain.css';
import CVAbout from './CVAbout';
import CVAside from './CVAside';

export default function CVMain() {
  return (
    <main id="cv-main">
      <section className='section-main'>
        <CVAbout />
      </section>
      <section className='section-aside'>
        <CVAside />
      </section>
    </main>
  );
}
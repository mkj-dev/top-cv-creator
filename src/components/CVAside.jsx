import '../styles/CVAside.css';

export default function Main() {
  return (
    <>
      <aside id='cv-aside'>
        <h3 className='contact-title'>Contact</h3>
        <p>Mobile: 123456789</p>
        <p>Email: mail@gmail.com</p>
        <p>LinkedIn: <a href="">profile link</a></p>
        <h3 className='skills-title'>Skills</h3>
        <ul>
          <li>skill</li>
          <li>skill</li>
          <li>skill</li>
          <li>skill</li>
          <li>skill</li>
        </ul>
        <h3 className='languages-title'>Languages</h3>
        <ul>
          <li>English - B1</li>
          <li>German - B1</li>
          <li>Spanish - B1</li>
        </ul>
      </aside>
    </>
  );
}
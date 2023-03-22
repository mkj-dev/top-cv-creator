import './styles/App.css'
import CVHeader from './components/CVHeader'
import CVMain from './components/CVMain'

export default function App() {

  return (
    <div className="App" id="resume">
      <CVHeader />
      <CVMain />
    </div>
  );
}
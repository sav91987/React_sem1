import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting.js';
import { CurrentTime } from './components/CurrentTime/CurrentTime.js';
import EventCard from './components/EventCard/EventCard.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting />  
        <CurrentTime />
        <div className="eventCard__container">
        <EventCard title="Выставка" date="04.09.2024" place="ДК Пионер"/>
        <EventCard title="Презентация" date="05.09.2024" place="ДК Строитель"/>
        <EventCard title="Научное собрание" date="06.09.2024" place="ДК Металлург"/>
        </div>
      </header>
    </div>
  );
}

export default App;

import logo from './logo/cv.png'
import './App.css';

function App() {
  return (
    <div className="Add">
      <div className="logoBox">
        <img  className="logo"src={logo} alt="logo"/>
      </div>
      <h2>HEY! WE ARE COMING SOON...</h2>
      <div className="duration">
        <div className="time">
          <span>00</span>
          <span>Day</span>
        </div>

        <div className="time">
          <span>00</span>
          <span>Hours</span>
        </div>

        <div className="time">
          <span>00</span>
          <span>Minutes</span>
        </div>

        <div className="time">
          <span>00</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(num) {

  const [counter, setCounter] = useState(0);

  //setTimeout( () => setCounter( counter + 1), 1000 );

  const handlePlus = () => setCounter(counter + 1);
  const handleMinus = () => setCounter(counter - 1);
  const handleReset = () => setCounter(0);

  const Display = ({ counter }) => <> counter { counter } </>

  const Button = ({ handleClick, text}) => {
    return (
      <>
        <button onClick={handleClick}>
          {text}
        </button>

      </>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Display counter={counter} />

        <Button 
          handleClick={ handlePlus }
          text = "plus"
        />

        <Button 
          handleClick={ handleReset }
          text = "reset"
        />      

        <Button 
          handleClick={ handleMinus }
          text = "minus"

        />

      </header>

    </div>
  );
}

export default App;

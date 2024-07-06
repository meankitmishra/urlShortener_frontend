import { useState /*,useEffect*/} from 'react';
import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:8080/api/message') // Adjust the port to match your backend
  //     .then(response => response.text())
  //     .then(data => setMessage(data))
  //     .catch(error => console.error('There was an error!', error));
  // }, []);

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
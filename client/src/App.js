import './App.css';
import Proudact from './Proudact';
import { useEffect , useState} from 'react';

function App() {

  const [proudacts, setProudacts] = useState([]);

   useEffect(() => {
     fetch('http://localhost:3001')
     .then(response => response.json())
     .then(data => setProudacts(data));
   }, []);

  return (
    <div className="App">
      {proudacts.map(product => {
          return ( 
          <Proudact {...product}/>
          );
      })}

      
    </div>
  );
}

export default App;

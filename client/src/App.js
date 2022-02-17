import './App.css';
import Proudacts from './Proudacts';
import { useEffect , useState, createContext} from 'react';
import Categoris from './Categoris';

export const cartCount = createContext({});

function App() {

  
  const [proudacts, setProudacts] = useState([]);
  const [choseCategory, setChoseCategory] = useState('all');
  

   useEffect(() => {
     fetch('/api/products')
     .then(response => response.json())
     .then(data => setProudacts(data));
   }, []);

   
  
  return (
    <cartCount.Provider value={{items:{7:2}}}>
    <div className="App">

      <Categoris currentCategory={choseCategory} onChange={setChoseCategory}/>

      <Proudacts  proudacts = {proudacts} category = {choseCategory}/>
          
      
      
    </div>
    </cartCount.Provider>
  );
}

export default App;

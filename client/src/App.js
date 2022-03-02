import './App.css';
import Proudacts from './Proudacts';
import { useEffect , useState, createContext} from 'react';
import Categoris from './Categoris';
import { CartProvider } from './CartContext';

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
    <CartProvider>
      <div className="App">

        <Categoris currentCategory={choseCategory} onChange={setChoseCategory}/>

        <Proudacts  proudacts = {proudacts} category = {choseCategory}/>
       
      </div>
    </CartProvider>
    </cartCount.Provider>
    
  );
}

export default App;

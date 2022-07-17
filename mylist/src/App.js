import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import ShoppingList from './ShoppingList';
import itemData from './data/items'

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleClick(){
    setIsDarkMode((isDarkMode)=>!isDarkMode)
  }


  return (
    <div className={"App " + (isDarkMode? "dark": "light")}>
      <Header  isDarkMode={isDarkMode} onDarkMode={handleClick}/>
      <ShoppingList items={items}/>
    </div>
  )
}

export default App;

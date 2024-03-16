import React, { useState } from 'react';
import { CountryContext } from './compoent/context/CountryContext';
import Index from './Routes';

function App() {

  const [searchKey, setSearchKey] = useState(null); 
  const [news, setNews] = useState();

  return (
    <CountryContext.Provider value={{searchKey, setSearchKey, news, setNews}}>
    <Index />
    </CountryContext.Provider>
  )
}

export default App

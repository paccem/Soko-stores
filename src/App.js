import React from 'react';
import Navigation from './features/components/pages/Navigation'
import './App.css';
import StoreFooter from './features/components/StoreFooter'


const App = () => {
  return (
    <div className="App">
      <Navigation />
      <StoreFooter /> 
    </div>
  );
}

export default App;


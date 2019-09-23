import React from 'react';
import './App.css';
import BoxComponent from './BoxComponent/Box.component';

function App() {
  return (
    <div className="App">
      <BoxComponent msg='Hello my friend!' />
      <BoxComponent msg='Dogy, kitty, mesaure failure!' />
    </div>
  );
}

export default App;

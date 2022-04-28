import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import Characters from './components/characters/Characters';

type Person = {
  name: string;
  age?: number;
}

let person: Person = {
  name: 'Matias',
  age: 36,
};

function App() {
  return (
    <div className="App">
      <h1>Nombre {person.name}</h1>
      <h3>Edad {person.age}</h3>
      <Link to={'charactes-paginated'} >Characters Paginated example</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="charactes-paginated" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;

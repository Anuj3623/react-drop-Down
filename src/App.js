import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Should you use a dropdown ?</h1>
      <Dropdown />
    </div>
  );
}

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Yes', 'Probably not'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>
        {selectedOption || 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown-options" onMouseEnter={()=>setIsOpen(true)}   onMouseLeave={()=>setIsOpen(false)} >
          {options.map((option, index) => (
            <li  key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

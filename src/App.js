import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Card from './Card';
import InputForm from './InputForm';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API on component mount
  useEffect(() => {
    fetch('http://localhost:5000/cards')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCards(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Function to add new card
  const addCard = (nama, nim) => {
    const newCard = { nama, nim };
    fetch('http://localhost:5000/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCard)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCards([...cards, data]))
      .catch(error => setError(error));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <nav className="w-full bg-blue-600 p-4 mb-8">
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="text-white font-semibold">Home</Link></li>
            <li><Link to="/about" className="text-white font-semibold">About</Link></li>
            <li><Link to="/input" className="text-white font-semibold">Input Data</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/input" element={
            <div className="w-full max-w-md mx-auto">
              <InputForm addCard={addCard} />
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error.message}</p>}
              <div className="mt-8">
                {cards.map((card, index) => (
                  <Card key={index} nama={card.nama} nim={card.nim} />
                ))}
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

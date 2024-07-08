import React, { createContext, useState, useEffect } from 'react';

// Membuat context
export const CardContext = createContext();

// Membuat provider component
export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <CardContext.Provider value={{ cards, loading, error, addCard }}>
      {children}
    </CardContext.Provider>
  );
};

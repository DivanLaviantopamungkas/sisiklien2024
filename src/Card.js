import React from 'react';

const Card = ({ nama, nim }) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4">
      <h1 className="text-3xl font-bold mb-4">Nama: {nama}</h1>
      <p className="text-lg">NIM: {nim}</p>
    </div>
  );
};

export default Card;

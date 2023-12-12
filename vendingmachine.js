import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
  const snacks = [
    { id: 1, name: 'Snack1' },
    { id: 2, name: 'Snack2' },
    { id: 3, name: 'Snack3' },
    // Add more snacks as needed
  ];

  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        {snacks.map((snack) => (
          <li key={snack.id}>
            <Link to={`/snack/${snack.id}`}>{snack.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendingMachine;

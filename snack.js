import React from 'react';
import { Link } from 'react-router-dom';

const Snack = ({ match }) => {
  const snackId = match.params.id; // Accessing the snack id from the URL
  // You can fetch snack details based on the id or use static data

  return (
    <div>
      <h2>Snack Details</h2>
      <p>Details for Snack {snackId}</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack;

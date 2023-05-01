import React from "react";

function ItemDetail({ match }) {
  const itemId = match.params.id;

  // code to fetch item data using itemId
  console.log(itemId);

  return (
    <div>
      <h1>Item Details</h1>
      <p>Item ID: {itemId}</p>
    </div>
  );
}

export default ItemDetail;

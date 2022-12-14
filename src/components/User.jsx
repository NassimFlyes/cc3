import React from "react";


function User({ id, image, firstName, lastName }) {
  return (
    <div className="user">
      <img src={image} alt="not found" />
      <h2>{firstName + " " + lastName}</h2>
      <button onClick={() => navigate(`/DetailUser/${User.id}`)}>
     			Detail User
      </button>
      <button onClick={() => navigate(`/ListProduits/${User.id}`)}>
     			Panier
      </button>
        
        
          
    </div>
  );
}

export default User;

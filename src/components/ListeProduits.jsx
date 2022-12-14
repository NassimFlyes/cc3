import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function ListeProduits() {
  const { id } = useParams();
  const { data } = useSelector((state) => state.cart);
  let content;
  if (data.cart !== undefined) {
    const existingItem = data.cart.find((item) => item.userId === Number(id));
    if (existingItem !== undefined) {
      content = (
        <table className="">
          <thead>
            <tr>
              <th>produit</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
            <tr key={existingItem.id}>
              <td>{existingItem.cart}</td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      content = <h2 >nothing</h2>;
    }
  } else {
    content = <h2 >nothing</h2>;
  }
  return <div >{content}</div>;
}

export default ListeProduits;

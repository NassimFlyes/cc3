import React from "react";
import { useSelector } from "react-redux";

function DetailUser() {
  const { activeId, data } = useSelector((state) => state.users);

  let content;
  if (data.users !== undefined) {
    const itemExist = data.users.find((item) => item.id === activeId);
    console.log(itemExist);
    if (itemExist !== undefined) {
      content = (
        <table >
          <thead>
            <tr>
              <th>image</th>
              <th>first name</th>
              <th>last name</th>
              <th>age</th>
              <th>gender</th>
              <th>email</th>
              <th>phone</th>
              <th>weight</th>
              <th>weight</th>
              <th>birthDate</th>
              <th>bloodGroup </th>
              <th>eye color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={itemExist.image} alt="not found" />
              </td>
              <td>{itemExist.firstName}</td>
              <td>{itemExist.lastName}</td>
              <td>{itemExist.age}</td>
              <td>{itemExist.gender}</td>
              <td>{itemExist.email}</td>
              <td>{itemExist.phone}</td>
              <td>{itemExist.weight}</td>
              <td>{itemExist.height}</td>
              <td>{itemExist.birthDate}</td>
              <td>{itemExist.bloodGroup}</td>
              <td>{itemExist.eyeColor}</td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      content = <p>pas de information pour cet utilisateur</p>;
    }
  }
  return <div>{content}</div>;
}

export default DetailUser;

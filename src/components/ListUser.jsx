import React from "react";
import User from "./User";
import "./ListUsers.css";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../redux/UserSlice";
function ListUser({ usersData }) {
  
  const dispatch = useDispatch();
  const showUserDetails = (id) => {
    dispatch(userSliceActions.onChangeTheActiveId(id));
  };
  return (
    <div>
      <h2>Liste des utilisateurs :</h2>
      <div className="listUsers">
        {usersData !== undefined &&
          usersData.map((item) => (
            <User
              key={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              image={item.image}
              showUserDetails={() => showUserDetails(item.id)}
              id={item.id}
            />
          ))}
      </div>
    </div>
  );
}

export default ListUser;

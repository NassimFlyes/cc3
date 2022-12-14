import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/UserSlice";
import ListUser from "./components/ListUser";
import DetailUser from "./components/DetailUser";
import { Route, Routes } from "react-router-dom";
import CartSlice from "./redux/CartSlice";
import CartSlice, { getCart } from "./redux/CartSlice";
import { Header } from "react-bootstrap/lib/navbar";

function App() {
  const { data, isLoading, error } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  let content;
  if (isLoading === true) {
    content = <h2>is loading </h2>;
  } else if (isLoading === false && error !== "") {
    content = <h2>Error</h2>;
  } else {
    content = <ListUser usersData={data.users} />;
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={content} exact />
        <Route path="/DetailUser" element={<DetailUser />} />
        <Route path="/ListeProduits/:id" element={<CartSlice />} />
      </Routes>
    </div>
  );
}

export default App;

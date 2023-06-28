import Header from "./components/Header";
import Blogs from "./components/Movies";
import UserMovies from "./components/UserMovies";
import MovieDetail from "./components/MovieDetail";
import AddMovie from "./components/AddMovies";

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
function App() {
  const dispath = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/" element={<Auth />} />
          ) : (
            <>
              <Route path="/" element={<Blogs />} />
              <Route path="/movies/add" element={<AddMovie/>} />
              <Route path="/mymovies" element={<UserMovies />} />
              <Route path="/mymovies/:id" element={<MovieDetail />} />{" "}
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Watch from "./components/Watch/Watch";
import AdminHome from "./components/Admin/AdminHome/AdminHome/AdminHome";
import UserList from "./components/Admin/UserList/UserList";
import User from "./components/Admin/User/User";
import NewUser from "./components/Admin/NewUser/NewUser";
import MovieList from "./components/Admin/MovieList/MovieList";
import Movie from "./components/Admin/Movie/Movie";
import NewMovie from "./components/Admin/NewMovie/NewMovie";
import ListTable from "./components/Admin/ListTable/ListTable";
import List from "./components/Admin/List/List";
import NewList from "./components/Admin/NewList/NewList";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import UserProvider from "./components/Admin/context/UserProvider";

function App() {
// const {user} = useContext(UserProvider);
const user = false;
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home/> : <Login />} />
        <Route path="/movies" element={user ? <Home type="movies" /> : <Login />} />
        <Route path="/series" element={user ? <Home type="series" /> : <Login />} />
        <Route path="/watch" element={user ? <Watch /> : <Login />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/admin/users" element={<UserList />} />
            <Route path="/admin/user/:id" element={<User />} />
            <Route path="/admin/newUser" element={<NewUser />} />
            <Route path="/admin/movies" element={<MovieList />} />
            <Route path="/admin/movie/:id" element={<Movie />} />
            <Route path="/admin/newMovie" element={<NewMovie />} />
            <Route path="/admin/list" element={<ListTable />} />
            <Route path="/admin/list/:id" element={<List />} />
            <Route path="/admin/newList" element={<NewList />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App

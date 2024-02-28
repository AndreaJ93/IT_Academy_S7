import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import StarshipsList from "../pages/starships/StarshipsList";
import StarshipInformation from "../pages/starships/StarshipInformation";
import SignUp from "../pages/auth/SignUp";
import LogIn from "../pages/auth/LogIn";
import ProtectedRoutes from "./ProtectedRoutes";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="starshipsList" element={<StarshipsList />} />
          <Route
            path="starshipInformation/:id"
            element={<StarshipInformation />}
          />
        </Route>
      </Route>
      <Route path="signUp" element={<SignUp />} />
      <Route path="logIn" element={<LogIn />} />
    </Routes>
  );
};

export default MyRoutes;

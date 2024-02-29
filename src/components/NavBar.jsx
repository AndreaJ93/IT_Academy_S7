import { Link, useLocation } from "react-router-dom";
import "../index.css";
import { setWantsToViewMore } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  function wantsToViewMore(x) {
    dispatch(setWantsToViewMore(x));
  }
  return (
    <div className="text-center grid grid-cols-6 bg-black border-b border-[#414242] mb-3">
      <Link
        to="/"
        onClick={() => wantsToViewMore(false)}
        className={`col-start-3 text-[#B5B7B7] font-semibold hover:text-white p-2 ${
          location.pathname === "/" ? "active" : ""
        }`}
      >
        HOME
      </Link>
      <Link
        to="/starshipsList"
        onClick={() => wantsToViewMore(true)}
        className={`text-[#B5B7B7] font-semibold hover:text-white p-2 ${
          location.pathname.startsWith("/starshipsList") ||
          location.pathname.startsWith("/starshipInformation")
            ? "active"
            : ""
        }`}
      >
        STARSHIPS
      </Link>
    </div>
  );
};

export default NavBar;

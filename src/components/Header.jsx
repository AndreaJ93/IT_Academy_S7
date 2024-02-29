import NavBar from "./NavBar";
import logo from "../assets/starwars.png";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LogOut from "../pages/auth/LogOut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <>
      <div className="grid grid-cols-3 p-8 bg-black pb-0 pt-3">
        <section className="text-white p-3">
          <FontAwesomeIcon icon={faTiktok} className="px-2 text-xl" />
          <FontAwesomeIcon icon={faInstagram} className="px-2 text-xl" />
          <FontAwesomeIcon icon={faXTwitter} className="px-2 text-xl" />
          <FontAwesomeIcon icon={faFacebook} className="px-2 text-xl" />
          <FontAwesomeIcon icon={faYoutube} className="px-2 text-xl" />
        </section>
        <img src={logo} className="mx-auto"></img>
        <section className="text-end text-white">
          {isAuthenticated === false ? (
            <>
              <Link
                to="logIn"
                className="p-3 text-[#B5B7B7] font-semibold hover:text-white"
              >
                LOG IN
              </Link>
              <Link
                to="signUp"
                className="p-3 text-[#B5B7B7] font-semibold hover:text-white"
              >
                <FontAwesomeIcon icon={faUser} className="px-3" />
                SIGN UP
              </Link>
            </>
          ) : (
            <LogOut />
          )}
        </section>
      </div>
      <NavBar></NavBar>
      <Outlet />
    </>
  );
};

export default Header;

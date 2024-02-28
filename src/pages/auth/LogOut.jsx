import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const LogOut = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(logout());
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="p-3 text-[#B5B7B7] font-semibold hover:text-white"
    >
      <Link to="/">
        LOG OUT
        <FontAwesomeIcon icon={faRightFromBracket} className="px-3" />
      </Link>
    </button>
  );
};

export default LogOut;

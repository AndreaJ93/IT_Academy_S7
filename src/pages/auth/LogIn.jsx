import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login, setWantsToViewMore } from "../../redux/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import starwars from "../../assets/starwars.png";
import { ClipLoader } from "react-spinners";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const wantsToViewMore = useSelector((state) => state.user.wantsToViewMore);

  const handleLogIn = async () => {
    setLoading(true);
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(login());
      if (wantsToViewMore) {
        navigate("/starshipsList");
        dispatch(setWantsToViewMore(false));
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      if (error.code === "auth/invalid-credential") {
        alert(
          "Invalid email or password. Please enter the correct email or password."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  function handleClose() {
    navigate("/");
  }

  return (
    <div
      style={{
        backgroundImage:
          "url(https://cdn.registerdisney.go.com/v4/asset/bundler/STARWARS/v4/images/v1/starwars-background-web.webp)",
      }}
      className="p-6"
    >
      <button
        className="rounded-full ms-auto bg-white w-8 h-8 text-black pb-1 block hover:bg-[#CDD1D5]"
        onClick={handleClose}
      >
        🗙
      </button>
      <div className="grid justify-center grid-cols-4">
        <img
          src={`${starwars}`}
          alt="Star Wars"
          className="mx-auto col-span-2 col-start-2"
        ></img>
        <div className="bg-white rounded-3xl p-8 col-span-2 col-start-2">
          <h1 className="text-2xl font-semibold">
            Enter your Star Wars account.
          </h1>
          <form>
            <label className="block text-sm mt-4 text-[#1D1E1F]">Email: </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#E9EBF0] rounded-md p-4 block w-full mb-4 focus:outline-none"
            ></input>
            <label className="block text-sm mt-4 text-[#1D1E1F]">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#E9EBF0] rounded-md p-4 block w-full mb-4 focus:outline-none"
            ></input>
          </form>
          <button
            className="block w-full rounded-full bg-[#FADE4B] p-4 mt-9 font-semibold hover:bg-[#F2D24E]"
            onClick={handleLogIn}
          >
            {loading ? (
              <ClipLoader speedMultiplier={0.3} color="black" />
            ) : (
              "Log In"
            )}
          </button>
          <p className="text-end text-sm mb-4 mt-1">
            Don't have an account?{" "}
            <Link
              to="/signUp"
              className="text-blue-600 font-bold hover:underline"
            >
              Sing Up!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

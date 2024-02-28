import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import starwars from "../../assets/starwars.png";
import { ClipLoader } from "react-spinners";

const SignUp = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser());
      navigate("/");
    } catch (error) {
      console.error("Error during sign-up:", error);
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already in use. Please enter another email.");
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
          <h1 className="text-center text-2xl font-semibold">Sign Up</h1>
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
            className="block w-full rounded-full bg-[#FADE4B] p-4 mt-9 mb-4 font-semibold hover:bg-[#F2D24E]"
            onClick={handleSignUp}
          >
            {loading ? (
              <ClipLoader speedMultiplier={0.3} color="black" />
            ) : (
              "Create Account"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
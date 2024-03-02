import { Link } from "react-router-dom";
import backgroundDeathStar from "../assets/deathStarBackground.jpg";
import { useDispatch } from "react-redux";
import { setWantsToViewMore } from "../redux/slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  function wantsToViewMore() {
    dispatch(setWantsToViewMore(true));
  }

  return (
    <div
      className="text-white h-96 items-center grid mx-9"
      style={{
        backgroundImage: `url(${backgroundDeathStar})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <h1
        className="w-1/2 p-9 text-xl mx-auto text-[#B5B7B7] bg-[#1D1E1F] rounded-l-lg border-r-2 border-amber-100"
        data-testid="welcomeText"
      >
        On this site you will find a guide of all starships from the Star Wars
        saga, as well as the pilots and the movies.
      </h1>
      <button className="w-1/6 mx-auto rounded-full bg-[#FADE4B] p-1 mt-9 mb-4 font-semibold hover:bg-[#F2D24E]">
        <Link
          to="starshipsList"
          className="h-full w-full block p-3 text-black font-bold"
          onClick={wantsToViewMore}
        >
          Explore more
        </Link>
      </button>
    </div>
  );
};

export default Home;

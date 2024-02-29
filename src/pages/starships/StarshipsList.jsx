import { Link } from "react-router-dom";
import { useGetAllStarshipsQuery } from "../../redux/slices/apiSlice";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";

const StarshipsList = () => {
  const [pag, setPag] = useState(1);
  const { data: starships } = useGetAllStarshipsQuery(pag);
  const [starshipsList, setStarshipsList] = useState(null);

  function viewMore() {
    if (starships && starships.next === null) {
      console.log("There is no more starships");
    } else {
      //Para el infiniteScroll
      setTimeout(() => {
        setPag(pag + 1);
      }, 2000);
    }
  }

  useEffect(() => {
    if (starships && starshipsList === null) {
      setStarshipsList(starships.results);
    } else if (starships && starshipsList !== null) {
      setStarshipsList(starshipsList.concat(starships.results));
    }
  }, [starships]);

  return (
    <>
      <div className="bg-black pb-6 mx-auto">
        <InfiniteScroll
          dataLength={starshipsList !== null ? starshipsList.length : 36}
          next={viewMore}
          hasMore={true}
          loader={
            pag !== 4 ? (
              <div className="flex justify-center items-center overflow-hidden">
                <ClipLoader speedMultiplier={0.5} color={"#F2D24E"} />
              </div>
            ) : null
          }
        >
          {starshipsList !== null &&
            starshipsList.map((starship, index) => {
              const arrayUrl = starship.url.split("/");
              let id = arrayUrl[arrayUrl.length - 2];
              return (
                <Link
                  to={`/starshipInformation/${id}`}
                  key={index}
                  className="block w-4/6 mx-auto"
                >
                  <div className="bg-[#1D1E1F] m-5 p-3 px-6 mx-auto rounded hover:shadow-inner hover:shadow-[#606161]">
                    <h2 className="text-[#B5B7B7] text-xl">{starship.name}</h2>
                    <h4 className="text-[#787A7A]">{starship.model}</h4>
                  </div>
                </Link>
              );
            })}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default StarshipsList;

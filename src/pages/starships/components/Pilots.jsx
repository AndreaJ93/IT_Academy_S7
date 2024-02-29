import { useParams } from "react-router-dom";
import { useGetStarshipQuery } from "../../../redux/slices/apiSlice";
import { useEffect, useState } from "react";

const Pilots = () => {
  const { id } = useParams();
  const { data: selectedStarship } = useGetStarshipQuery(id);
  const [pilots, setPilots] = useState([]);

  const getPilots = async () => {
    if (selectedStarship) {
      const fetchPromises = selectedStarship.pilots.map(async (url) => {
        let pilotId = url.split("/")[5];
        return fetch(url)
          .then((resp) => resp.json())
          .then((data) => ({ name: data.name, id: pilotId }))
          .catch((error) => console.log(error));
      });
      try {
        const resolvedPilots = await Promise.all(fetchPromises);
        setPilots(resolvedPilots);
      } catch (error) {
        console.error("Error fetching pilots:", error);
      }
    }
  };

  useEffect(() => {
    getPilots();
  }, [selectedStarship]);

  return (
    <>
      {selectedStarship && selectedStarship.pilots.length > 0 ? (
        <div className="my-14">
          <h3 className="text-white font-bold my-3 border-b border-t p-2 border-[#414242]">
            PILOTS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pilots.map((pilot) => (
              <div
                key={pilot.id}
                className="rounded-xl bg-[#212529] overflow-hidden"
              >
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${pilot.id}.jpg`}
                  className="border-b-2 border-amber-100"
                ></img>
                <h1 className="text-[#B5B7B7] p-4 text-center font-semibold text-sm">
                  {pilot.name.toUpperCase()}
                </h1>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Pilots;

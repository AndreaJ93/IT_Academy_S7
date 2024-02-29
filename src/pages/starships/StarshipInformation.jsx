import { useParams } from "react-router-dom";
import { useGetStarshipQuery } from "../../redux/slices/apiSlice";
import { useState } from "react";
import noPicture from "../../assets/no-picture.jpg";
import Pilots from "./components/Pilots";
import Films from "./components/Films";

const StarshipInformation = () => {
  const { id } = useParams();
  const { data: selectedStarship } = useGetStarshipQuery(id);
  const [isImage, setIsImage] = useState(
    `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  );

  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  fetch(imageUrl).then((response) => {
    if (response.ok) {
      setIsImage(
        `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
      );
    } else {
      setIsImage(noPicture);
    }
  });

  return (
    <div className="p-6">
      <h3 className="text-white font-bold my-3 border-b p-2 border-[#414242]">
        STARSHIP
      </h3>
      {selectedStarship && (
        <div className="grid lg:grid-cols-2 m-5 justify-items-end">
          <img
            src={isImage}
            alt={`${selectedStarship.name} Image`}
            className="rounded-l-lg w-full h-full object-cover"
          ></img>
          <div className="text-[#B5B7B7] bg-[#1D1E1F] p-6 rounded-r-lg border-l-2 border-amber-100">
            <h1 className="text-2xl mt-6">
              {selectedStarship.name.toUpperCase()}
            </h1>
            <p className="my-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, sint
              placeat culpa a quod quisquam temporibus delectus mollitia
              inventore quae nesciunt minus!
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="my-3">Model: {selectedStarship.model}</p>
                <p className="my-3">
                  Cost in credits: {selectedStarship.cost_in_credits}
                </p>
                <p className="my-3">
                  Atmosphering Speed: {selectedStarship.max_atmosphering_speed}
                </p>
              </div>
              <div>
                <p className="my-3">
                  Manufacturer: {selectedStarship.manufacturer}
                </p>
                <p className="my-3">Length: {selectedStarship.length}</p>
                <p className="my-3">Crew: {selectedStarship.crew}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Pilots></Pilots>
      <Films></Films>
    </div>
  );
};

export default StarshipInformation;

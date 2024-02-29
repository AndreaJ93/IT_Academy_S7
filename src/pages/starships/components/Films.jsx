import { useParams } from "react-router-dom";
import { useGetStarshipQuery } from "../../../redux/slices/apiSlice";
import { useEffect, useState } from "react";

const Films = () => {
  const { id } = useParams();
  const { data: selectedStarship } = useGetStarshipQuery(id);
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    if (selectedStarship) {
      const fetchPromises = selectedStarship.films.map(async (url) => {
        let filmId = url.split("/")[5];
        return fetch(url)
          .then((resp) => resp.json())
          .then((data) => ({
            title: data.title,
            episode: data.episode_id,
            id: filmId,
          }))
          .catch((error) => console.log(error));
      });
      try {
        const resolvedFilms = await Promise.all(fetchPromises);
        setFilms(resolvedFilms);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    }
  };

  useEffect(() => {
    getFilms();
  }, [selectedStarship]);

  return (
    <>
      {selectedStarship && selectedStarship.films.length > 0 ? (
        <div className="my-14">
          <h3 className="text-white font-bold my-3 border-b border-t p-2 border-[#414242]">
            FILMS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {films.map((film) => (
              <div
                key={film.id}
                className="rounded-xl bg-[#212529] overflow-hidden"
              >
                <img
                  src={`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`}
                  className="border-b-2 border-amber-100"
                ></img>
                <h1 className="text-[#B5B7B7] pt-4 text-center font-semibold text-sm">
                  {film.title.toUpperCase()}
                </h1>
                <h2 className="text-[#B5B7B7] pb-4 text-center">{`Episode ${film.episode}`}</h2>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Films;

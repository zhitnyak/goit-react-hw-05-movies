import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCastMovieInfo } from "../api";
import s from "./page.module.css";
import defaultImg from "../../img/defaultImg.jpg";
const IMG_PATH = "https://image.tmdb.org/t/p/original";

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  function smoothScroll() {
    return window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    getCastMovieInfo(movieId)
      .then((data) => setCast(data.cast))
      .then(() => smoothScroll());
  }, [movieId]);

  return (
    <>
      {cast && (
        <div>
          <ul className={s.castList}>
            {cast.map((actor) => (
              <div className={s.itemWrapper} key={actor.id}>
                {actor.profile_path ? (
                  <img
                    src={`${IMG_PATH}` + actor.profile_path}
                    alt={actor.name}
                    width="135"
                  />
                ) : (
                  <img
                    className={s.defaultImg}
                    src={defaultImg}
                    alt="Not found"
                    width="135"
                  />
                )}

                <li className={s.castName}>{actor.name}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

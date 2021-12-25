import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getMovieReview } from "../api";
import s from "./page.module.css";

export default function ReviewsView() {
  const [reviews, setReviews] = useState([]);
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  function smoothScroll() {
    return window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    getMovieReview(movieId)
      .then((data) => setReviews(data.results))
      .then(() => smoothScroll());
  }, [movieId]);

  if (reviews.length === 0) {
    return <h3>no reviews</h3>;
  }

  return (
    <div className={s.reviewContainer}>
      {reviews &&
        reviews.map((review) => (
          <li className={s.reviewList} key={review.id}>
            <span className={s.reviewAuthor}>{review.author}</span>
            <p className={s.reviewText}>{review.content}</p>
          </li>
        ))}
    </div>
  );
}

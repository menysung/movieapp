import Star from "../../assets/star.png";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    //카드 누르면 영화 상세페이지로 이동
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}?language=ko`}
      target="_blank" //새 탭으로 열림
      className="movie_card"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="movie poster"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.title}</h3>
        <div className="align_center movie_date_rate">
          <p>{movie.release_date}</p>
          <p className="align_center">
            평점
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </a>
  );
}

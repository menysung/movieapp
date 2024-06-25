import { useEffect, useState } from "react";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import "./MovieList.css";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]); //필터링 한 영화 데이터
  const [minRating, setMinRating] = useState(0); //평점
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7d2ef290feb724a005d52f4bb3088662&language=ko"
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };
  const handleFilter = (rate) => {
    setMinRating(rate); //평점을 업데이트
    //필터함수로 영화평점이 지정한 평점보다 높은 경우에만 남김
    const filtered = movies.filter((movie) => movie.vote_average >= rate);
    setFilterMovies(filtered);
  };

  //시작시 한 번 영화를 불러온다
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          인기순 <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li
              className="movie_filter_item active"
              onClick={() => handleFilter(8)}
            >
              8+ Star
            </li>
            <li className="movie_filter_item" onClick={() => handleFilter(7)}>
              7+ Star
            </li>
            <li className="movie_filter_item" onClick={() => handleFilter(6)}>
              6+ Star
            </li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filterMovies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  );
}

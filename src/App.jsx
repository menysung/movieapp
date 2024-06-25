import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <MovieList />
    </div>
  );
}

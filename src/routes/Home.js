import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import Loading from "../components/Loading";
import "../css/home.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimun_rating=9&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []); // 빈 배열일땐 한번만 실행

    return (
        <div className="wrapper">
            <Header />
            {loading ? (
                <Loading />
            ) : (
                <div className="home_movie_wrap">
                <ul className="home_movie_list">{movies.map((movie) => (
                    <li key={movie.id} className="home_movie_item"><Movie id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} /></li>
                ))}</ul></div>
            )}
        </div >
    );
}

export default Home;
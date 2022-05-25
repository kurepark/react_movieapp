import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import Header from "../components/Header";
import Loading from "../components/Loading";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState();
    const {id} = useParams();
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieDetail(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
            <Header />
            {loading ? <Loading /> : (
                <div> <MovieDetail key={movieDetail.id} id={movieDetail.id} coverImg={movieDetail.medium_cover_image} title={movieDetail.title} description={movieDetail.description_full} genres={movieDetail.genres} rating={movieDetail.rating} year={movieDetail.year} bgImg={movieDetail.background_image_original} /></div>
            )}
        </div>
    )
}

export default Detail;
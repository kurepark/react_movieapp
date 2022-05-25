import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";

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
        console.log("moviedeatil",movieDetail);
    return (
        <div>
            {loading ? <h2>Loading...</h2> : (
                <div> <Movie key={movieDetail.id} id={movieDetail.id} coverImg={movieDetail.medium_cover_image} title={movieDetail.title} genres={movieDetail.genres} /></div>
            )}
        </div>
    )
}

export default Detail;
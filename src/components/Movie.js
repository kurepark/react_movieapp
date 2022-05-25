import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/movie.css";

const onErrorImg = (event) => {
    const noneImg = event.target;
    const parent = noneImg.parentNode;
    parent.classList.replace('movie_img_wrap', 'movie_img_none');
    noneImg.remove();
    parent.innerHTML = `<span>이미지가<br>없습니다</span>`; 
}

function Movie({ coverImg, title, summary, genres, id }) { // props
    return (
        <div className="movie_card">
            <Link to={`/movie/${id}`} className="movie_link">
                <div className="movie_img_wrap">
                    <img src={coverImg} alt={title} onError={onErrorImg} width="100%" />
                </div>
                <div className="movie_info">
                    <h2 className="movie_title">{title}</h2>
                    <p className="movie_summary">{summary}</p>
                    <ul className="movie_genres">
                        {genres.map((g, index) => (
                            <li key={index} className="movie_genres_item">{g}</li>
                        ))}
                    </ul>
                </div>
                <div className="movie_btn_detail">show more info ➡️</div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Movie;
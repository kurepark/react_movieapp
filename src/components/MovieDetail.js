import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/movieDetail.css";

const onErrorImg = (event) => {
    const noneImg = event.target;
    const parent = noneImg.parentNode;
    parent.classList.replace('movie_detail_img_wrap', 'movie_detail_img_none');
    noneImg.remove();
    parent.innerHTML = `<span>이미지가<br>없습니다</span>`; 
}

function MovieDetail({ coverImg, title, description, genres, id, rating, year, bgImg }) { // props
    return (
        <div>
            <div className="movie_detail_bg"><img src={bgImg} alt="" /></div>
                <div className="movie_detail_card">
                    <div className="movie_detail_img_wrap">
                        <img src={coverImg} alt={title} width="100%" onError={onErrorImg} />
                    </div>
                    <div className="movie_detail_info_wrap">
                        <h2 className="movie_detail_title">🎬 {title}</h2>
                        <div className="movie_detail_info">
                            <span className="movie_year">📆 {year}</span>
                            <span className="movie_rating">⭐️ {rating}</span>
                        </div>
                        <ul className="movie_detail_genres_list">
                            {genres.map((g, index) => (
                                <li key={index} className="movie_detail_genres_item">{g}</li>
                            ))}
                        </ul>
                        <div className="movie_detail_summary_wrap">
                            {description ? ( <p className="movie_detail_description">{description}</p>) : (<p className="movie_detail_description_none">줄거리 정보가 등록되지 않았습니다.</p>)}
                        </div>
                    </div>
                    <Link to="/" className="movie_detail_btn_close">✖️</Link>
                </div>
        </div>
    );
}

MovieDetail.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default MovieDetail;
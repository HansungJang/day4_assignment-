// 영화 이미지 크기 설정
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

function Movie({ title, poster_path, vote_average }) {
  return (
    <div className="movie-container">
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터"></img>
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average.toFixed(1)}</span>
      </div>
    </div>
  );
}

export default Movie;

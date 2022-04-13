import MovieCardImage from "./MovieCardImage";
import MovieCardTitle from "./MovieCardTitle";

const MovieCard = ({ movieTitle, dateReleased, poster, removeMovie, selectMovie }) => {

    const divStyle = {
        backgroundColor: "grey",
        padding: "1em",
        marginBottom: "1em"
    }

    const handleClick = ()=> selectMovie(movieTitle)

    return (
        <div onClick={handleClick} className="movie-card" style={divStyle}>
            <MovieCardImage {...{poster, movieTitle}} />
            <MovieCardTitle {...{movieTitle, dateReleased}} />
        </div>
    )
}

export default MovieCard
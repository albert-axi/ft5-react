import MovieCardImage from "./MovieCardImage";
import MovieCardTitle from "./MovieCardTitle";

export default function MovieCardDetails({poster, dateReleased, movieTitle}) {

    return (
        <>
            <MovieCardImage {...{poster, movieTitle}} />
            <MovieCardTitle {...{movieTitle, dateReleased}} />
        </>
    )
}
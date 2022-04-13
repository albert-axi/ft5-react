export default function MovieCardTitle({ movieTitle, dateReleased }) {

    return (
        <h3>
            {movieTitle} - {dateReleased}
        </h3>
    )
}
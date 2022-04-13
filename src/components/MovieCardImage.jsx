export default function MovieCardImage({poster, movieTitle}){

    const imageStyle = {
        width: '100px',
        border: 'solid 2px red'
    }

    return(
        <img src={poster} alt={movieTitle} style={imageStyle} />
    )
}
import { Link } from 'react-router-dom'
import Movies from '../images/Movies/movies.png'
import Albums from '../images/Albums/albums.png'


export default function Home() {
    return (
        <div className="main-body" >
            <h1>
                Welcome to the ranking app.
            </h1>
            
            <br/>

            <h3>
                Click on one of the links below to give your ranking of the given movies or music albums.
            </h3>

            <br/>

            <div style={{ display: "grid", gap: "2rem", justifyItems: "center" }}>
                <Link to='/RankMovies'>Rank Movies </Link >
                <img src={Movies} style={{ width: "300px"}} />

                <Link to='/RankAlbums'>Rank Albums</Link >
                <img src={Albums} style={{ width: "300px" }} />

            </div>

        </div>

    )
}
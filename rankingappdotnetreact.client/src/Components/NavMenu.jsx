import Me from '../images/react.svg'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'


export default function NavMenu() {
    return (


        <Navbar className="navbar" expand="md">
            <div className="container">
                <Link to='/' >
                    <h1>Ranking App</h1>
                </Link>

                <Navbar.Toggle className='button' data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="nav">
                    <Nav>
                        <Nav.Item>
                            <Link to='/RankMovies'>Rank Movies</Link >
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/RankAlbums'>Rank Albums</Link >
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>

    )
}
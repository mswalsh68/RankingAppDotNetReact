import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './Components/NavMenu';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import RankItemsContainer from './Pages/RankItemsContainer';
import './styles.css'
import MovieImages from './Components/MovieImages';
import AlbumImages from './Components/AlbumImages';


export default function App() {

    return (
      <>
            <NavMenu />
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/RankMovies" element={<RankItemsContainer dataType={1} imgArr={MovieImages} />} />
                <Route path="/RankAlbums" element={<RankItemsContainer dataType={2} imgArr={AlbumImages} />} />
            
                </Routes>


      </>
 

    )
}

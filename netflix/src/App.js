import './App.css';
import Banner from './Banner';
import request from './request';
import Row from './Row';

function App() {
    return (
        <div className="app">
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={request.fetchTrending} />
            <Row title="Top Rated" fetchUrl={request.fecthTopRated} />
            <Row title="Action Movies" fetchUrl={request.fecthActionMovies} />
            <Row title="Comedy Movies" fetchUrl={request.fecthComedynMovies} />
            <Row title="Horror Movies" fetchUrl={request.fecthHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={request.fecthRomanceMovies} />
            <Row title="Documentaries" fetchUrl={request.fecthDocumentaries} />
        </div>
    );
}

export default App;

import React from "react";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import requests from "./requests";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* <Row title="Action" fetchUrl="" /> */}
    </div>
  );
}

export default App;

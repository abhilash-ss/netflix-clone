import React from "react";
import Row from "./components/Row";
import requests from "./requests";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Row
        title="Netflix originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      {/* <Row title="Action" fetchUrl="" /> */}
    </div>
  );
}

export default App;

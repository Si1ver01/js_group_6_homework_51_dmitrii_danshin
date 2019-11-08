import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Poster from "./components/poster/index";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row flex-nowrap justify-content-between align-items-center vh-100">
          <Poster
            name="После нашей эры"
            year="2013"
            url="https://st.kp.yandex.net/im/poster/2/1/5/kinopoisk.ru-After-Earth-2151337.jpg"
          />
          <Poster
            name="Робот по имени Чаппи"
            year="2015"
            url="http://media.filmz.ru/photos/full/filmz.ru_f_206463.jpg"
          />
          <Poster
            name="Железный человек 3"
            year="2013"
            url="https://www.film.ru/sites/default/files/movies/posters/im3_robertdowney_largeh_logo_infront_layers_preview.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

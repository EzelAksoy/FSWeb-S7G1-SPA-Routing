import React from "react";
import { useHistory } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  const history = useHistory();
  const { list } = props;
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {list.map((movie) => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div
        className="home-button"
        onClick={() => {
          history.push("/");
        }}
      >
        Anasayfa
      </div>
    </div>
  );
}

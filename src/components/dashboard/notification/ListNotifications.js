import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../common/header";
import NavbarComp from "../NavbarComponent";
import "../../../scssWeb/main.css";
import stardestacados from "../../../assets/img/stardestacados.svg";
import trash from "../../../assets/img/trash.svg";
import MensajeSvg from "../../../assets/img/notifications_G.svg";
import NavbarNotification from "../notification/NabvarNotifcation";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [standout, setStandout] = useState([false]);
  useEffect(() => {
    const API_KEY = "d44d107da20a4f07877b9111ead536c3";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data.articles);
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDestacar = (event) => {
    setStandout(event.target.value);
  };

  return (
    <div>
      <Header />
      <NavbarComp />
      <div className="barra">
        <img className="svg-img-barra" src={MensajeSvg} />
        <h2>MENSAJES</h2>
      </div>
      <div className="container-body-notification">
        <NavbarNotification />
        <div className="Container">
          {articles.map((article) => (
            <div className="notification-box" key={article.name}>
              <button onClick={() => handleDestacar(article.id)}>
                <img src={stardestacados} />
                {article.standout ? "Destacado" : "Destacar"}
              </button>
              <button>
                <img src={trash} />
              </button>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

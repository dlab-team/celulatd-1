import React, { useState, useEffect } from "react";
import axios from "axios";
import  stardestacados from "../../../assets/img/stardestacados.svg";
import trash from "../../../assets/img/trash.svg";

export default function ListDocument() {
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

  const handleDestacar = (articleId) => {
    setStandout(articleId.target.value);
    const url = 'http://localhost:3000/api/v1/standout';
    const data = { standout: standout };

    axios
      .patch(url, data)
      .then((response) => {
        console.log(response.data);
        const updatedArticles = articles.map((article) => {
          if (article.id === articleId) {
            return { ...article, standout: !standout };
          } else {
            return article;
          }
        });
        setArticles(updatedArticles);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div className="Container">
      {articles.map((article) => (
        <div key={article.id}>
          <div>aca va la imagen</div>
          <h1>{article.title}</h1>
          <h4>{article.content}</h4>
            //destacados trash.svg
          <button onClick={() => handleDestacar(article.id)}>
          <img src={stardestacados}/>
            {article.standout ? "Destacado" : "Destacar"}
          </button>
          <button>
          <img src={trash}/>
          </button>
        </div>
      ))}
    </div>
  );
}

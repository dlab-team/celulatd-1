import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../common/header";

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
    <div className="Container">
      {articles.map((article) => (
        <div key={article.name}>
          <h1>{article.title}</h1>
          <h4>{article.content}</h4>
        </div>
      ))}
    </div>
  );
}

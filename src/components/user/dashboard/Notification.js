import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarUserComponent from "./NavbarUserComponet";

const NotificationUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <NavbarUserComponent />
      <div className="container-responsive">
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationUser;

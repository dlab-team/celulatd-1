import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "../componets/user/Login";
import Register from "../components/user/Register";
import Registernewsletter from "../components/user/RegisterLading";

function UserApi() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://mi-api.com/userData");
      setUserData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <Login userData={userData} />
      <Registernewsletter userData={userData} />
      <Register userData={userData}/>
    </div>
  );
}

export default UserApi;

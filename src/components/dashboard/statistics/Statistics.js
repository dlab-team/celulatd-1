import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import NavbarComp from "../NavbarComponent";
import "../../../scssWeb/main.css";
import DataSvg from "../../../assets/img/data_thresholding_G.svg";
import Header from "../../common/header";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, Filler);

const options = {
  maintainAspectRatio: false,
  color: "black",
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const labelsMonthly = [
  "Visualizacion de videos",
  "Videos completados",
  "Videos abandonados",
];
/* const scoresMonthly = [10, 10, 10]; */

const labelsWeekly = [
  "Visualizacion de videos",
  "Videos completados",
  "Videos abandonados",
];
/* const scoresWeekly = [5, 7, 8]; */

export default function PieCharts() {
  const [scoreValuesMonthly, setScoreValuesMonthly] = useState([]);
  const [scoreValuesWeekly, setScoreValuesWeekly] = useState([]);

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => {
        // Aquí actualizamos los valores de los scores
        setScoreValuesMonthly(response.data.monthly);
        setScoreValuesWeekly(response.data.weekly);
      })
      .catch((error) => {
        console.log(error + " Error al cargar la api");
      });
  }, []);

  const dataMonthly = useMemo(() => {
    return {
      datasets: [
        {
          label: "Estadisticas Mensuales",
          data: scoreValuesMonthly,
          backgroundColor: ["#6c757d", "#073B3A", "rgba(7, 59, 58, 0.35)"],
        },
      ],
      labels: labelsMonthly,
    };
  }, [scoreValuesMonthly]);

  const dataWeekly = useMemo(() => {
    return {
      datasets: [
        {
          label: "Estadisticas Semanales",
          data: scoreValuesWeekly,
          backgroundColor: [
            "#E2A30B",
            "rgba(226, 163, 11, 0.5)",
            "rgba(7, 59, 58, 0.35)",
          ],
        },
      ],
      labels: labelsWeekly,
    };
  }, [scoreValuesWeekly]);

  return (
    <div>
      <Header />
      <NavbarComp />
      <div className="barra">
        <img className="svg-img-barra" src={DataSvg} />
        <h2>ESTADÍSTICAS</h2>
      </div>
      <div className="container-body-all container-statics_body">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <div>
            <h3>Estadísticas mensuales</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "30px",
                  width: "100%",
                }}
              >
                {scoreValuesMonthly.map((score, index) => (
                  <div key={index}>
                    <p style={{ color: "black" }}>{score}</p>
                    <p style={{ color: "black" }}>{labelsMonthly[index]}</p>
                  </div>
                ))}
              </div>
              <div style={{ width: "100%", marginTop: "20px" }}>
                <Pie data={dataMonthly} options={options} />
              </div>
            </div>
          </div>
          <div>
            <h3>Estadísticas semanales</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "30px",
                  width: "100%",
                }}
              >
                {scoreValuesWeekly.map((score, index) => (
                  <div key={index}>
                    <p style={{ color: "black" }}>{score}</p>
                    <p style={{ color: "black" }}>{labelsWeekly[index]}</p>
                  </div>
                ))}
              </div>
              <div style={{ width: "100%", marginTop: "20px" }}>
                <Pie data={dataWeekly} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

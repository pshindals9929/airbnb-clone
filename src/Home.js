import React, { useEffect, useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
import axios from "axios";

function Home() {
  const [services, setServices] = useState([]);

  const api = "http://localhost:5000/";
  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        setServices(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Banner />

      <div className="card_Data">
        {services.map((number) => (
         (
           <Card  number={number}   key={number.id.toString()} />
         
        )))}
      </div>
    </div>
  );
}

export default Home;

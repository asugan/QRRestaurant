import React from "react";
import { useEffect, useState } from "react";

function Masa() {
  const [masa1, setMasa1] = useState([]);
  const [masa2, setMasa2] = useState([]);

  console.log(masa1);

  useEffect(() => {
    fetch("/api/getYemek/1")
      .then((response) => response.json())
      .then((data) => {
        setMasa1(data.yemek);
      })
      .catch((err) => {
        console.log(err.message);
      });
    fetch("/api/getYemek/2")
      .then((response) => response.json())
      .then((data) => {
        setMasa2(data.yemek);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <h1>1</h1>
      {masa1.map((items) => {
        return <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>;
      })}
      <h1>2</h1>
      {masa2.map((items) => {
        return <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>;
      })}
    </div>
  );
}

export default Masa;

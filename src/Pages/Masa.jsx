import React from "react";
import { useEffect, useState } from "react";

function Masa() {
  const [yemeks, setYemek] = useState([]);

  console.log(yemeks);

  useEffect(() => {
    fetch("/api/getYemek/14")
      .then((response) => response.json())
      .then((data) => {
        setYemek(data.yemek);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <h1>14</h1>
      {yemeks.map((items) => {
        return <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>;
      })}
    </div>
  );
}

export default Masa;

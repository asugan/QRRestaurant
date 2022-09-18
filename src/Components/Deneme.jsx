import React, { useEffect, useState } from "react";

function Deneme() {
  const [yemeks, setYemek] = useState([]);

  useEffect(() => {
    fetch("/api/getall")
      .then((response) => response.json())
      .then((data) => {
        setYemek(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <h1>Yemek Adları</h1>

      {yemeks.map((yemek, id) => {
        return (
          <div className="" key={id}>
            <h1>{yemek.yemek_adi}</h1>
            <h5>{yemek.fiyat}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default Deneme;

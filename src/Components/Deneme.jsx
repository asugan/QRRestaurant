import React, { useEffect, useState } from "react";

function Deneme() {
  const [yemeks, setYemek] = useState([]);

  useEffect(() => {
    fetch("api/getCategory/Yemekler")
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
          <div className="background" key={id}>
            <h1>{yemek.yemek_adi}</h1>
            <div className="altcontainer">
              <img src={`images/${yemek.image}`} alt="" />
              <h5>{yemek.fiyat} ₺</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Deneme;

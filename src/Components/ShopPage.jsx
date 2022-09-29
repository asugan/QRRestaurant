import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/homepage.scss";

function ShopPage() {
  const [yemeks, setYemek] = useState([]);
  const [message, setMessage] = useState("");
  const [secilenyemek, SetSecilen] = useState([]);
  const masa_numarasi = useParams();
  const hamham = [masa_numarasi];
  console.log(hamham[0].masaId);
  console.log(
    yemeks.map((id) => {
      return console.log(JSON.stringify(id._id));
    })
  );

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

  let yemeksec = () => {};

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("/api/post/masa", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          masa_numarasi: hamham[0].masaId,
          yemek: yemeks,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Yemek Adları</h1>

      {yemeks.map((yemek, id) => {
        return (
          <div className="background" key={id}>
            <h1>{yemek.yemek_adi}</h1>
            <div className="altcontainer">
              <img src={`/images/${yemek.image}`} alt="" />
              <h5>{yemek.fiyat} ₺</h5>
            </div>
            <button>Sepete Ekle</button>
          </div>
        );
      })}

      <form onSubmit={handleSubmit}>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default ShopPage;

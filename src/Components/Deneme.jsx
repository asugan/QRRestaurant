import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Deneme() {
  const [yemeks, setYemek] = useState([]);

  let asyncf = async () => {
    let fetch1 = await fetch("/api/getCategory/Yemekler");
    let data1 = await fetch1.json();
    let fetch2 = await fetch("/api/getCategory/İçecekler");
    let data2 = await fetch2.json();
    let fetch3 = await fetch("/api/getCategory/Tatlılar");
    let data3 = await fetch3.json();

    setYemek([data1, data2, data3]);
  };

  useEffect(() => {
    asyncf();
  }, []);

  return (
    <div className="App">
      <div className="Navbar">
        <Link className="navigationlink" to="/admin">
          Admin Paneli
        </Link>
      </div>

      <div className="menucontainer">
        <h1>Yemekler</h1>

        {yemeks[0]?.map((yemek, id) => {
          return (
            <div className="background" key={id}>
              <img src={`/images/${yemek.image}`} alt="" />
              <div className="altcontainer">
                <h2>{yemek.yemek_adi}</h2>
                <h5>{yemek.fiyat} ₺</h5>
              </div>
            </div>
          );
        })}

        <h1 className="myh1">İçecekler</h1>
        {yemeks[1]?.map((yemek, id) => {
          return (
            <div className="background" key={id}>
              <img src={`/images/${yemek.image}`} alt="" />
              <div className="altcontainer">
                <h2>{yemek.yemek_adi}</h2>
                <h5>{yemek.fiyat} ₺</h5>
              </div>
            </div>
          );
        })}

        <h1 className="myh1">Tatlılar</h1>

        {yemeks[2]?.map((yemek, id) => {
          return (
            <div className="background" key={id}>
              <img src={`/images/${yemek.image}`} alt="" />
              <div className="altcontainer">
                <h2>{yemek.yemek_adi}</h2>
                <h5>{yemek.fiyat} ₺</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Deneme;

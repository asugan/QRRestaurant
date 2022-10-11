import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withAuthInfo } from "@propelauth/react";

function HomePageComponent({ isLoggedIn }) {
  const [yemeks, setYemek] = useState([]);

  let asyncf = async () => {
    let fetch1 = await fetch("/api/getCategories");
    let data1 = await fetch1.json();

    setYemek(data1);
  };

  useEffect(() => {
    asyncf();
  }, []);

  let delyemek = async (id, e) => {
    e.preventDefault();

    try {
      await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.log(err);
    }

    asyncf();
  };

  if (isLoggedIn) {
    return (
      <div className="App">
        <div className="Navbar">
          <Link className="navigationlink" to="/admin">
            Admin Paneli
          </Link>
        </div>

        <div className="menucontainer">
          <h1 className="menuheader">Menümüz</h1>
          {yemeks.map((items) => {
            return (
              <div className="yemekcontainer">
                <div className="category">
                  <h1>{items.kategori}</h1>
                </div>
                {items.yemekler.map((yemek, id) => {
                  return (
                    <div className="background" key={id}>
                      <img src={`/images/${yemek.image}`} alt="" />
                      <div className="altcontainer">
                        <h2>{yemek.yemek_adi}</h2>
                        <h5>{yemek.fiyat} ₺</h5>
                        <a
                          href="#name"
                          className="buttons"
                          onClick={(e) => delyemek(yemek._id, e)}
                        >
                          Yemeği Sil
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="Navbar">
          <Link className="navigationlink" to="/admin">
            Admin Paneli
          </Link>
        </div>

        <div className="menucontainer">
          <h1>Yemekler</h1>
        </div>
      </div>
    );
  }
}

export default withAuthInfo(HomePageComponent);

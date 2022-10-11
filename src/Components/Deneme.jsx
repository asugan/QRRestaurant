import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withAuthInfo } from "@propelauth/react";

function Deneme({ isLoggedIn }) {
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
          <h1>Yemekler</h1>

          {yemeks.map((items) => {
            return (
              <div className="">
                <div className="">
                  <h1>{items.kategori}</h1>
                </div>
                <div className="">
                  {items.yemekler.map((yemek) => {
                    return <h1>{yemek._id}</h1>;
                  })}
                </div>
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

export default withAuthInfo(Deneme);

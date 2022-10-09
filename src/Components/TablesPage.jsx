import React from "react";
import { useEffect, useState } from "react";
import { withAuthInfo } from "@propelauth/react";
import { Link } from "react-router-dom";

function TablesPage({ user }) {
  const [masa, setMasa] = useState([]);

  const fetchme = async () => {
    try {
      setMasa([]);
      for (let i = 1; i < 4; i++) {
        const fetchh = await fetch(`/api/getyemek/${i}`);
        const json = await fetchh.json();

        setMasa((prevPosts) => [...prevPosts, json]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchme();
  }, []);

  let updateshit = async (id, e) => {
    e.preventDefault();

    try {
      await fetch(`/api/masa/update/${id}`, {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          finished: true,
        }),
      });
    } catch (err) {
      console.log(err);
    }

    fetchme();
  };

  // const interval = setInterval(() => {
  //   fetchme();
  // }, 2000);
  // return () => clearInterval(interval);

  return (
    <div className="container">
      <div className="Navbar">
        <Link className="navigationlink" to="/">
          Anasayfa
        </Link>
        <Link className="navigationlink" to="/admin">
          Admin Paneli
        </Link>
      </div>
      <div className="tablecontainer">
        {masa?.map((items) => {
          return (
            <div className="masa">
              <h1 className="me">Masa 1</h1>
              <div className="hamham">
                {items?.yemek.map((objects) => {
                  return (
                    <div key={objects.yemek_adi} className="masadiv">
                      <ul>
                        <li>{objects.yemek_adi}</li>
                      </ul>
                      <ul>
                        <li>{objects.quantity}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>

              <button onClick={(e) => updateshit(items._id, e)}>
                Güncelle
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withAuthInfo(TablesPage);

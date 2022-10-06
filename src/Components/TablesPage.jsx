import React from "react";
import { useEffect, useState } from "react";
import "../Styles/tablepage.scss";
import { withAuthInfo } from "@propelauth/react";

function TablesPage({ user }) {
  const [masa, setMasa] = useState([]);

  const fetchme = async () => {
    try {
      setMasa([]);
      for (let i = 1; i < 4; i++) {
        const fetchh = await fetch(`/api/getyemek/${i}`);
        const json = await fetchh.json();
        if (json.yemek != null) {
          setMasa((prevPosts) => [...prevPosts, json.yemek]);
        } else {
          return;
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchme();
  }, []);

  // const interval = setInterval(() => {
  //   fetchme();
  // }, 2000);
  // return () => clearInterval(interval);

  console.log(masa);

  return (
    <div className="container">
      <div className="tablecontainer">
        <div className="masa">
          <h1 className="me">Masa 1</h1>
          <div className="hamham">
            {masa[0]?.map((items) => {
              return (
                <div key={items.yemek_adi} className="masadiv">
                  <ul>
                    <li>{items.yemek_adi}</li>
                  </ul>
                  <ul>
                    <li>{items.quantity}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="masa">
          <h1 className="me">Masa 2</h1>
          <div className="hamham">
            {masa[1]?.map((items) => {
              return (
                <div key={items.yemek_adi} className="masadiv">
                  <ul>
                    <li>{items.yemek_adi}</li>
                  </ul>
                  <ul>
                    <li>{items.quantity}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="masa">
          <h1 className="me">Masa 3</h1>
          <div className="hamham">
            {masa[2]?.map((items) => {
              return (
                <div key={items.yemek_adi} className="masadiv">
                  <ul>
                    <li>{items.yemek_adi}</li>
                  </ul>
                  <ul>
                    <li>{items.quantity}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="masa">
          <h1 className="me">Masa 4</h1>
          <div className="hamham">
            {masa[3]?.map((items) => {
              return (
                <div key={items.yemek_adi} className="masadiv">
                  <ul>
                    <li>{items.yemek_adi}</li>
                  </ul>
                  <ul>
                    <li>{items.quantity}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="masa">
          <h1 className="me">Masa 5</h1>
          <div className="hamham">
            {masa[4]?.map((items) => {
              return (
                <div key={items.yemek_adi} className="masadiv">
                  <ul>
                    <li>{items.yemek_adi}</li>
                  </ul>
                  <ul>
                    <li>{items.quantity}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthInfo(TablesPage);

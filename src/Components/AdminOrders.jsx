import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminOrders() {
  const [masa, setMasa] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const fetchme = async () => {
    try {
      setMasa([]);
      let fetchh = await fetch("/api/getAllYemek");
      let response = await fetchh.json();
      setMasa(response);
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

  const göster = () => {
    setIsActive((current) => !current);
  };

  console.log(masa);

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

      <div className="orders">
        <div className="showbutton">
          <a onClick={göster} className="buttons">
            {isActive ? "Siparişleri Gizle" : "Siparişleri Göster"}
          </a>
        </div>
        {masa?.map((orders) => {
          return (
            <div className="orderscontainer" key={orders?._id}>
              <div className="hamham">
                <h5>Sipariş ID : {orders?._id}</h5>
                <h5>Masa Numarası : {orders?.masa_numarasi}</h5>
              </div>
              <div
                className="order"
                style={{
                  display: isActive ? "block" : "none",
                }}
              >
                {orders.yemek.map((items) => {
                  return (
                    <div className="orderlist">
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
          );
        })}
      </div>
    </div>
  );
}

export default AdminOrders;

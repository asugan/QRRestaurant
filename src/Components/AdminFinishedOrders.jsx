import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminFinishedOrders() {
  const [masa, setMasa] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const fetchme = async () => {
    try {
      setMasa([]);
      let fetchh = await fetch("/api/getAllFinishedYemek");
      let response = await fetchh.json();
      setMasa(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchme();
  }, []);

  const göster = () => {
    setIsActive((current) => !current);
  };

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
          <a onClick={göster} href="#name" className="buttons">
            {isActive ? "Siparişleri Gizle" : "Siparişleri Göster"}
          </a>
        </div>
        {masa?.map((orders) => {
          return (
            <div className="orderscontainer" key={orders?._id}>
              <div className="hamham">
                <h5>Sipariş ID : {orders?._id}</h5>
                <h5>Masa Numarası : {orders?.masa_numarasi}</h5>
                <h5>Sipariş Durumu : Tamamlandı</h5>
              </div>
              <div
                className="order"
                style={{
                  display: isActive ? "block" : "none",
                  marginTop: 10,
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

export default AdminFinishedOrders;

import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminFinishedOrders() {
  const [masa, setMasa] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  const fetchme = async () => {
    try {
      setMasa([]);
      let fetchh = await fetch(`/api/getAllFinishedYemek?page=${pageNumber}`);
      let response = await fetchh.json();
      setMasa(response.posts);
      setNumberOfPages(response.totalPages);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchme();
  }, [pageNumber]);

  const göster = () => {
    setIsActive((current) => !current);
  };

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  if (numberOfPages > 2) {
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
        <div className="pagination">
          <div className="buton1">
            <a className="buttons" href="#name" onClick={gotoPrevious}>
              Önceki Sayfa
            </a>
          </div>
          <div className="buton2">
            <a className="buttons" href="#name" onClick={gotoNext}>
              Sonraki Sayfa
            </a>
          </div>
        </div>
      </div>
    );
  } else {
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
}

export default AdminFinishedOrders;

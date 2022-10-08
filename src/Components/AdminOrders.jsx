import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminOrders() {
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [masa, setMasa] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  const fetchme = async () => {
    try {
      setMasa([]);
      let fetchh = await fetch(`/api/getAllYemek?page=${pageNumber}`);
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

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

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
        <h3>Page of {pageNumber + 1}</h3>
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
                <h5>Sipariş Durumu : Tamamlanmadı</h5>
                <a
                  className="buttons"
                  onClick={(e) => updateshit(orders._id, e)}
                >
                  Sipariş Tamamlandı
                </a>
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
      <button onClick={gotoPrevious}>Previous</button>
      {pages.map((pageIndex) => (
        <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
          {pageIndex + 1}
        </button>
      ))}
      <button onClick={gotoNext}>Next</button>
    </div>
  );
}

export default AdminOrders;

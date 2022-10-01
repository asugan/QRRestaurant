import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/homepage.scss";

function ShopPage() {
  const [yemeks, setYemek] = useState([]);
  const [number, setNumber] = useState(1);
  const [sendnumber, numberSend] = useState([]);
  const [orders, setOrder] = useState([]);
  const [cart, setCart] = useState([]);
  const masa_numarasi = useParams();
  const hamham = [masa_numarasi];

  if (number <= 0) {
    setNumber(1);
  }

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

  const yemeksec = async (id, ad, fiyat, e) => {
    e.preventDefault();

    setCart([...cart, { yemek_adi: ad, yemek_fiyati: fiyat }]);
    setOrder([...orders, { _id: id }]);
    numberSend([...sendnumber, { number: number }]);
    setNumber(1);
  };

  const removeFromCart = (index) => {
    setCart((cart) => cart.filter((_, i) => i !== index));
    numberSend((sendnumber) => sendnumber.filter((_, i) => i !== index));
    setOrder((orders) => orders.filter((_, i) => i !== index));
  };

  const numberfuncplus = () => {
    setNumber((count) => count + 1);
  };

  let numberfuncminus = (e) => {
    setNumber((count) => count - 1);
  };

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
          yemek: orders,
          yemek_numarasi: sendnumber,
        }),
      });
      if (res.status === 200) {
        setCart([]);
        numberSend([]);
        setOrder([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(orders, sendnumber, cart);
  }, [orders, sendnumber, cart]);

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
              <h1>{number}</h1>
            </div>
            <button
              onClick={(e) =>
                yemeksec(yemek._id, yemek.yemek_adi, yemek.fiyat, e)
              }
            >
              Sepete Ekle
            </button>
            <button onClick={numberfuncplus}>+</button>
            <button onClick={numberfuncminus}>--</button>
          </div>
        );
      })}

      <div className="ana">
        <div className="cart">
          <div className="mycartyemek">
            {cart.map((items, index) => {
              return (
                <div className="cartyemek">
                  <button onClick={() => removeFromCart(index)}>Delete</button>
                  <h5>{items.yemek_adi}</h5>
                  <h5>{items.yemek_fiyati} ₺</h5>
                </div>
              );
            })}
          </div>
          <div className="cartnumber">
            {sendnumber.map((items) => {
              return (
                <div className="flexbutton">
                  <h5>{items.number}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default ShopPage;

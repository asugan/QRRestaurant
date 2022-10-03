import React from "react";
import { useEffect, useState } from "react";
import "../Styles/tablepage.scss";

function TablesPage() {
  const [masa1, setMasa1] = useState([]);
  const [masa2, setMasa2] = useState([]);
  const [masa3, setMasa3] = useState([]);
  const [masa4, setMasa4] = useState([]);
  const [masa5, setMasa5] = useState([]);
  const [masa6, setMasa6] = useState([]);
  const [masa7, setMasa7] = useState([]);
  const [masa8, setMasa8] = useState([]);
  const [masa9, setMasa9] = useState([]);
  const [masa10, setMasa10] = useState([]);

  console.log(masa2);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/getYemek/1")
        .then((response) => response.json())
        .then((data) => {
          setMasa1(data.yemek);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/2")
        .then((response) => response.json())
        .then((data) => {
          setMasa2(data.yemek);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/3")
        .then((response) => response.json())
        .then((data) => {
          setMasa3(data.yemek);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/4")
        .then((response) => response.json())
        .then((data) => {
          setMasa4(data.yemek);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/5")
        .then((response) => response.json())
        .then((data) => {
          setMasa5(data.yemek);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/6")
        .then((response) => response.json())
        .then((data) => {
          setMasa6(data.yemek);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/7")
        .then((response) => response.json())
        .then((data) => {
          setMasa7(data.yemek);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/8")
        .then((response) => response.json())
        .then((data) => {
          setMasa8(data.yemek);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/9")
        .then((response) => response.json())
        .then((data) => {
          setMasa9(data.yemek);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/10")
        .then((response) => response.json())
        .then((data) => {
          setMasa10(data.yemek);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tablecontainer">
      <div className="masa">
        <h1 className="me">Masa 1</h1>
        <div className="hamham">
          {masa1.map((items) => {
            return (
              <div className="masadiv">
                <ul>
                  <li key={items.yemek_adi}>{items.yemek_adi}</li>
                </ul>
                <ul>
                  <li key={items.quantity}>{items.quantity}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="masa">
        <h1>Masa 2</h1>
        {masa2.map((items) => {
          return (
            <div className="">
              <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>
              <h1 key={items.yemek_adi}>{items.quantity}</h1>
            </div>
          );
        })}
      </div>
      <div className="masa">
        <h1>Masa 3</h1>
        {masa3.map((items) => {
          return (
            <div className="">
              <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>
              <h1 key={items.yemek_adi}>{items.quantity}</h1>
            </div>
          );
        })}
      </div>
      <div className="masa">
        <h1>Masa 4</h1>
        {masa4.map((items) => {
          return (
            <div className="">
              <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>
              <h1 key={items.yemek_adi}>{items.quantity}</h1>
            </div>
          );
        })}
      </div>
      <div className="masa">
        <h1>Masa 5</h1>
        {masa5.map((items) => {
          return (
            <div className="">
              <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>
              <h1 key={items.yemek_adi}>{items.quantity}</h1>
            </div>
          );
        })}
      </div>
      <div className="masa">
        <h1>Masa 6</h1>
        {masa6.map((items) => {
          return (
            <div className="">
              <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>
              <h1 key={items.yemek_adi}>{items.quantity}</h1>
            </div>
          );
        })}
      </div>
      <div className="masa">
        <h1>Masa 7</h1>
        {masa7.map((items) => {
          return (
            <div className="">
              <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>
              <h1 key={items.yemek_adi}>{items.quantity}</h1>
            </div>
          );
        })}
      </div>
      <div className="masa">
        <h1>Masa 8</h1>
        {masa8.map((items) => {
          return (
            <div className="">
              <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>
              <h1 key={items.yemek_adi}>{items.quantity}</h1>
            </div>
          );
        })}
      </div>
      <div className="masa">
        <h1>Masa 9</h1>
        {masa9.map((items) => {
          return (
            <div className="">
              <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>
              <h1 key={items.yemek_adi}>{items.quantity}</h1>
            </div>
          );
        })}
      </div>
      <div className="masa">
        <h1>Masa 10</h1>
        {masa10.map((items) => {
          return (
            <div className="">
              <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>
              <h1 key={items.yemek_adi}>{items.quantity}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TablesPage;

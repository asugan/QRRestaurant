import React from "react";
import { useEffect, useState } from "react";

function TablesPage() {
  const [masa1, setMasa1] = useState([]);
  const [masanum1, setMasanum1] = useState([]);
  const [masa2, setMasa2] = useState([]);
  const [masanum2, setMasanum2] = useState([]);
  const [masa3, setMasa3] = useState([]);
  const [masanum3, setMasanum3] = useState([]);
  const [masa4, setMasa4] = useState([]);
  const [masanum4, setMasanum4] = useState([]);
  const [masa5, setMasa5] = useState([]);
  const [masanum5, setMasanum5] = useState([]);
  const [masa6, setMasa6] = useState([]);
  const [masanum6, setMasanum6] = useState([]);
  const [masa7, setMasa7] = useState([]);
  const [masanum7, setMasanum7] = useState([]);
  const [masa8, setMasa8] = useState([]);
  const [masanum8, setMasanum8] = useState([]);
  const [masa9, setMasa9] = useState([]);
  const [masanum9, setMasanum9] = useState([]);
  const [masa10, setMasa10] = useState([]);
  const [masanum10, setMasanum10] = useState([]);

  console.log(masa2);
  console.log(masanum2);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/getYemek/1")
        .then((response) => response.json())
        .then((data) => {
          setMasa1(data.yemek);
          setMasanum1(data.yemek_number);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/2")
        .then((response) => response.json())
        .then((data) => {
          setMasa2(data.yemek);
          setMasanum2(data.yemek_number);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/3")
        .then((response) => response.json())
        .then((data) => {
          setMasa3(data.yemek);
          setMasanum3(data.yemek_number);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/4")
        .then((response) => response.json())
        .then((data) => {
          setMasa4(data.yemek);
          setMasanum4(data.yemek_number);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/5")
        .then((response) => response.json())
        .then((data) => {
          setMasa5(data.yemek);
          setMasanum5(data.yemek_number);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/6")
        .then((response) => response.json())
        .then((data) => {
          setMasa6(data.yemek);
          setMasanum6(data.yemek_number);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/7")
        .then((response) => response.json())
        .then((data) => {
          setMasa7(data.yemek);
          setMasanum7(data.yemek_number);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/8")
        .then((response) => response.json())
        .then((data) => {
          setMasa8(data.yemek);
          setMasanum8(data.yemek_number);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/9")
        .then((response) => response.json())
        .then((data) => {
          setMasa9(data.yemek);
          setMasanum9(data.yemek_number);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("/api/getYemek/10")
        .then((response) => response.json())
        .then((data) => {
          setMasa10(data.yemek);
          setMasanum10(data.yemek_number);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Masa 1</h1>
      {masa1.map((items) => {
        return <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>;
      })}
      {masanum1.map((items) => {
        return <h1 key={items}>{items}</h1>;
      })}
      <h1>Masa 2</h1>
      {masa2.map((items) => {
        return <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>;
      })}
      {masanum2.map((items) => {
        return <h1 key={items}>{items}</h1>;
      })}
      <h1>Masa 3</h1>
      {masa3.map((items) => {
        return <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>;
      })}
      {masanum3.map((items) => {
        return <h1 key={items}>{items}</h1>;
      })}
      <h1>Masa 4</h1>
      {masa4.map((items) => {
        return <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>;
      })}
      {masanum4.map((items) => {
        return <h1 key={items}>{items}</h1>;
      })}
      <h1>Masa 5</h1>
      {masa5.map((items) => {
        return <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>;
      })}
      {masanum5.map((items) => {
        return <h1 key={items}>{items}</h1>;
      })}
      <h1>Masa 6</h1>
      {masa6.map((items) => {
        return <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>;
      })}
      {masanum6.map((items) => {
        return <h1 key={items}>{items}</h1>;
      })}
      <h1>Masa 7</h1>
      {masa7.map((items) => {
        return <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>;
      })}
      {masanum7.map((items) => {
        return <h1 key={items}>{items}</h1>;
      })}
      <h1>Masa 8</h1>
      {masa8.map((items) => {
        return <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>;
      })}
      {masanum8.map((items) => {
        return <h1 key={items}>{items}</h1>;
      })}
      <h1>Masa 9</h1>
      {masa9.map((items) => {
        return <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>;
      })}
      {masanum9.map((items) => {
        return <h1 key={items}>{items}</h1>;
      })}
      <h1>Masa 10</h1>
      {masa10.map((items) => {
        return <h1 key={items.yemek_adi}>{items.yemek_adi}</h1>;
      })}
      {masanum10.map((items) => {
        return <h1 key={items}>{items}</h1>;
      })}
    </div>
  );
}

export default TablesPage;

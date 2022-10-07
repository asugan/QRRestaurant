import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShopPage() {
  const [yemeks, setYemek] = useState([]);
  const [number, setNumber] = useState(1);
  const [cart, setCart] = useState([]);
  const masa_numarasi = useParams();
  const hamham = [masa_numarasi];

  if (number <= 0) {
    setNumber(1);
  }

  let asyncf = async () => {
    let fetch1 = await fetch("/api/getCategory/Yemekler");
    let data1 = await fetch1.json();
    let fetch2 = await fetch("/api/getCategory/İçecekler");
    let data2 = await fetch2.json();
    let fetch3 = await fetch("/api/getCategory/Tatlılar");
    let data3 = await fetch3.json();

    setYemek([data1, data2, data3]);
  };

  useEffect(() => {
    asyncf();
  }, []);

  // setYemek([]);
  // const yiyecek = ["Yemekler", "İçecekler", "Tatlılar"];
  // yiyecek.forEach(async (element) => {
  //   let fetchh = await fetch(`/api/getCategory/${element}`);
  //   let data = await fetchh.json();
  //   setYemek((prevPosts) => [...prevPosts, data]);
  // });

  // fetch(`/api/getCategory/${element}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setYemek(data);
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });

  const yemeksec = async (id, ad, fiyat, e) => {
    e.preventDefault();

    setCart([...cart, { yemek_adi: ad, yemek_fiyati: fiyat, number: number }]);

    console.log(cart);
    setNumber(1);
  };

  const removeFromCart = (index) => {
    setCart((cart) => cart.filter((_, i) => i !== index));
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
          yemek: cart,
        }),
      });
      if (res.status === 200) {
        setCart([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(yemeks);
  }, [yemeks]);

  return (
    <div>
      <h1>Yemek Adları</h1>

      <div className="shopcontainer">
        {yemeks[0]?.map((yemek, id) => {
          return (
            <div className="background" key={id}>
              <div className="altcontainer">
                <h1>{yemek.yemek_adi}</h1>
                <img src={`/images/${yemek.image}`} alt="" />
                <h5>{yemek.fiyat} ₺</h5>
                <h1>{number}</h1>
              </div>
              <div className="buttonss">
                <a
                  className="buttons"
                  onClick={(e) =>
                    yemeksec(yemek._id, yemek.yemek_adi, yemek.fiyat, e)
                  }
                >
                  Sepete Ekle
                </a>
                <a className="buttons" onClick={numberfuncplus}>
                  +
                </a>
                <a className="buttons" onClick={numberfuncminus}>
                  -
                </a>
              </div>
            </div>
          );
        })}

        {yemeks[1]?.map((yemek, id) => {
          return (
            <div className="background" key={id}>
              <div className="altcontainer">
                <h1>{yemek.yemek_adi}</h1>
                <img src={`/images/${yemek.image}`} alt="" />
                <h5>{yemek.fiyat} ₺</h5>
                <h1>{number}</h1>
              </div>
              <div className="buttonss">
                <a
                  className="buttons"
                  onClick={(e) =>
                    yemeksec(yemek._id, yemek.yemek_adi, yemek.fiyat, e)
                  }
                >
                  Sepete Ekle
                </a>
                <a className="buttons" onClick={numberfuncplus}>
                  +
                </a>
                <a className="buttons" onClick={numberfuncminus}>
                  -
                </a>
              </div>
            </div>
          );
        })}

        {yemeks[2]?.map((yemek, id) => {
          return (
            <div className="background" key={id}>
              <div className="altcontainer">
                <h1>{yemek.yemek_adi}</h1>
                <img src={`/images/${yemek.image}`} alt="" />
                <h5>{yemek.fiyat} ₺</h5>
                <h1>{number}</h1>
              </div>
              <div className="buttonss">
                <a
                  className="buttons"
                  onClick={(e) =>
                    yemeksec(yemek._id, yemek.yemek_adi, yemek.fiyat, e)
                  }
                >
                  Sepete Ekle
                </a>
                <a className="buttons" onClick={numberfuncplus}>
                  +
                </a>
                <a className="buttons" onClick={numberfuncminus}>
                  -
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="ana">
        <div className="cart">
          <div className="mycartyemek">
            {cart.map((items, index) => {
              return (
                <div className="cartyemek">
                  <button onClick={() => removeFromCart(index)}>Delete</button>
                  <h5>{items.yemek_adi}</h5>
                  <h5>{items.yemek_fiyati} ₺</h5>
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

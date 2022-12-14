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
    let fetch1 = await fetch("/api/getCategories");
    let data1 = await fetch1.json();

    setYemek(data1);
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

  return (
    <div className="cont">
      <h1 className="menuheader">Menümüz</h1>
      <div className="maincont">
        {yemeks.map((items) => {
          return (
            <div className="shopcontainer">
              <div className="category">
                <h1>{items.kategori}</h1>
              </div>
              {items.yemekler.map((yemek, id) => {
                return (
                  <div className="background" key={id}>
                    <div className="altcontainer">
                      <div className="firstdiv">
                        <img src={`/images/${yemek.image}`} alt="" />
                        <h1>{yemek.yemek_adi}</h1>
                      </div>
                      <div className="seconddiv">
                        <h1>{yemek.fiyat} ₺</h1>
                        <h1>{number} Adet</h1>
                      </div>
                    </div>
                    <div className="buttonss">
                      <div className="firstbuttons">
                        <a
                          href="#name"
                          className="buttonsplus"
                          onClick={numberfuncplus}
                        >
                          +
                        </a>
                        <a
                          href="#name"
                          className="buttonsminus"
                          onClick={numberfuncminus}
                        >
                          -
                        </a>
                      </div>
                      <div className="secondbuttons">
                        <a
                          className="buttonssepet"
                          onClick={(e) =>
                            yemeksec(yemek._id, yemek.yemek_adi, yemek.fiyat, e)
                          }
                          href="#name"
                        >
                          Sepete Ekle
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        <div className="ana">
          <div className="cart">
            <div className="mycartyemek">
              <h1>Sepet</h1>
              {cart.map((items, index) => {
                return (
                  <div className="cartyemek">
                    <a
                      href="#name"
                      className="buttonsminus"
                      onClick={() => removeFromCart(index)}
                    >
                      -
                    </a>
                    <h5>{items.yemek_adi}</h5>
                    <h5>{items.number}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="form">
          <a href="#name" className="buttons" onClick={handleSubmit}>
            Siparişi Gönder
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;

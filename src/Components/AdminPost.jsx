import { useState } from "react";
import "../Styles/app.scss";

function AdminPost() {
  const [yemek_adi, setYemek_adi] = useState("");
  const [fiyat, setfiyat] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("/api/post", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify({
          yemek_adi: yemek_adi,
          fiyat: fiyat,
        }),
      });
      if (res.status === 200) {
        setYemek_adi("");
        setfiyat("");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Postpage">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={yemek_adi}
          placeholder="Name"
          onChange={(e) => setYemek_adi(e.target.value)}
        />
        <input
          type="text"
          value={fiyat}
          placeholder="fiyat"
          onChange={(e) => setfiyat(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default AdminPost;

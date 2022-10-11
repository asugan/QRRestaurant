import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function AdminCategory() {
  const [category, setCategory] = useState("");

  const myyemek = [{ _id: "6338e566ccee1431be062d6a" }];

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("/api/post/category", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          kategori: category,
          yemekler: myyemek,
        }),
      });
      if (res.status === 200) {
        setCategory("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(myyemek);

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
      <div className="Postpage">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            value={category}
            placeholder="Name"
            onChange={(e) => setCategory(e.target.value)}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

export default AdminCategory;

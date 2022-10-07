import React from "react";
import { useState } from "react";

function AdminCategory() {
  const [category, setCategory] = useState("");

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
        }),
      });
      if (res.status === 200) {
        setCategory("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
  );
}

export default AdminCategory;

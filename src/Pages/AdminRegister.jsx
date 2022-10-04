import React from "react";
import { useState } from "react";

function AdminRegister() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [userisadmin, setUserisadmin] = useState(false);
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("/api/post/newAdmin", {
        method: "POST",
        mode: "cors",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: username,
          password: password,
          userisadmin: userisadmin,
        }),
      });
      if (res.status === 200) {
        setUsername("");
        setpassword("");
        setUserisadmin(false);
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
          value={username}
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="fiyat"
          onChange={(e) => setpassword(e.target.value)}
        />

        <input
          type="text"
          value={userisadmin}
          placeholder="fiyat"
          onChange={(e) => setUserisadmin(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default AdminRegister;

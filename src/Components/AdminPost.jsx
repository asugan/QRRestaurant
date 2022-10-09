import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

function AdminPost() {
  const [yemek_adi, setYemek_adi] = useState("");
  const [fiyat, setfiyat] = useState("");
  const [kategori, setkategori] = useState({});
  const [message, setMessage] = useState("");
  const [image, setImage] = useState({ preview: "", data: "" });
  const [fetchkategori, setFetchKategori] = useState([]);

  let fetchit = async () => {
    let fetchme = await fetch("/api/getCategories");
    let response = await fetchme.json();
    setFetchKategori(response);
  };

  useEffect(() => {
    fetchit();
  }, []);

  const options = [];

  fetchkategori.forEach((element) => {
    options.push({ value: element.kategori, label: element.kategori });
  });

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  const hamham = kategori.value;

  let handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("yemek_adi", yemek_adi);
    formData.append("fiyat", fiyat);
    formData.append("kategori", hamham);
    formData.append("image", image.data);

    try {
      let res = await fetch("/api/post", {
        method: "POST",
        mode: "cors",

        body: formData,
      });
      if (res.status === 200) {
        setYemek_adi("");
        setfiyat("");
        setkategori({});
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
          <Select options={options} onChange={setkategori} />

          <h1>Upload to server</h1>
          {image.preview && (
            <img src={image.preview} width="100" height="100" alt="" />
          )}

          <hr></hr>
          <input type="file" name="image" onChange={handleFileChange}></input>

          <button type="submit">Create</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    </div>
  );
}

export default AdminPost;

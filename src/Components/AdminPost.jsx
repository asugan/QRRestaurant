import { useState } from "react";
import "../Styles/app.scss";
import Select from "react-select";

function AdminPost() {
  const [yemek_adi, setYemek_adi] = useState("");
  const [fiyat, setfiyat] = useState("");
  const [kategori, setkategori] = useState({});
  const [message, setMessage] = useState("");
  const [image, setImage] = useState({ preview: "", data: "" });
  const options = [
    { value: "Yemekler", label: "Yemek" },
    { value: "İçecekler", label: "İçecek" },
    { value: "Tatlılar", label: "Tatlı" },
  ];

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
  );
}

export default AdminPost;

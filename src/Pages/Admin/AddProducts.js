import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
// import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { addproductApi, productimageApi } from "../../Store/ProductSlice";
import "./Addproduct.css";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState({});
  const [data, setData] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

 

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(image);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handlePrice = (e) => {
    setPrice({ ...price, [e.target.name]: e.target.value });
    setData({ ...data, price: price });
  };

  const handleDataSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()
    formData.append('photo',image,image.name)
    await dispatch(addproductApi({data,formData,navigate }));
    } catch (error) {
      console.error(error);
    }
  };

  console.log(image);
  console.log(data);

  return (
    <div>
      <div className="addproducts" style={{ margin: "20px", display: "flex" }}>
        <div
          className="form"
          style={{ color: "white", border: "3px solid #144272" }}
        >
          <h5 style={{ color: "#144272", margin: "15px" }}>Add Products</h5>
          <form onSubmit={handleDataSubmit}>
            <TextField
              onChange={handleChange}
              id="standard-basic"
              label="Product Name"
              variant="standard"
              name="name"
              style={{
                width: "100%",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            />
            <br></br>
            <TextField
              onChange={handleChange}
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              id="standard-textarea"
              label="enter Description"
              placeholder="description"
              variant="standard"
              multiline
              name="description"
            />
            <br></br>

            <TextField
              onChange={handlePrice}
              id="standard-basic"
              label="Price"
              variant="standard"
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              name="actualPrice"
            />
            <br></br>
            <TextField
              onChange={handlePrice}
              id="standard-basic"
              label="previousPrice"
              variant="standard"
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              name="previousPrice"
            />
            <br></br>
            <TextField
              onChange={handlePrice}
              id="standard-basic"
              label="offerPrice"
              variant="standard"
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              name="offerPrice"
            />
            <br></br>
            <TextField
              onChange={handleChange}
              id="standard-basic"
              label="Quantity"
              variant="standard"
              name="quantity"
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            />
            <br></br>

            <TextField
              onChange={handleChange}
              id="standard-basic"
              label="Brand"
              variant="standard"
              name="brand"
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            />

            <Button
              type="submit"
              style={{
                border: "none",
                marginTop: "15px",
                borderRadius: "10px",
                background: "#144272",
              }}
            >
              Submit
            </Button>
          </form>
        </div>
        <div>
          <div
            className="form"
            style={{ color: "white", border: "3px solid #144272" }}
          >
            <h5 style={{ color: "#144272", margin: "15px" }}>Add Products</h5>
            <label
              style={{
                marginTop: "20px",
                color: "red",
                fontFamily: "sans-serif",
              }}
            >
              Upload image
            </label>

            <div
              className="iconbtn"
              style={{
                marginTop: "15px",
                width: "100px",
                height: "100px",
                background: "white",
                borderRadius: "20px",
              }}
            >
              {/* <IconButton
                style={{ position: "absolute" }}
                color="dark"
                aria-label="upload picture"
                component="label"
              > */}
              <input
                onChange={handleImage}
                name="images"
                accept="image/*"
                type="file"
              />

              {/* <PhotoCamera />
              </IconButton> */}
              {image && (
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={image}
                  alt="images"
                />
              )}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;

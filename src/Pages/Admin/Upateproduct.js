import React, { useEffect, useState } from "react";
// import Form from "react-bootstrap/Form";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
// import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import {
  SingleProductApi,
  UpdateProductApi,
  
} from "../../Store/ProductSlice";
import "./Addprodutcs.css";
import { useNavigate, useParams } from "react-router-dom";

const Upateproduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [price, setPrice] = useState({});
  const [image, setImage] = useState();

  const { singleproduct } = useSelector((state) => ({
    singleproduct: state.products.singleproduct
     
  }));

  console.log(singleproduct);
  const productId = params.id;

  useEffect(() => {
    setData(singleproduct);
  },[]);

  useEffect(() => {
    dispatch(SingleProductApi(productId));
  }, []);

  const handlePrice = (e) => {
    setPrice({ ...price, [e.target.name]: e.target.value });
    setData({ ...data, price: price });
  };
 
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(image);
  };

  // const handleDataupdate = async (e) => {
  //   e.preventDefault();
  //   try {
  
  //     const formData = new FormData();
  //     formData.append("photo", image, image.name);
  //     await dispatch(UpdateProductApi({ data, formData, navigate }));
  //     }
    
  //   catch (error) {
  //     console.error(error);
  //   }
  // };
  const handleDataupdate = async (e) => {
    e.preventDefault();
  
     dispatch(UpdateProductApi({ data, navigate,productId}));
    
  }

  return (
    <div>
      <div className="addproducts" style={{ margin: "20px", display: "flex" }}>
        <div
          className="addProductform"
        >
          <h5 style={{ color: "#144272", margin: "15px" }}>Update Products</h5>
          <form>
            <TextField
              onChange={handleChange}
              id="standard-basic"
              label="Product Name"
              variant="standard"
              name="name"
              value={data?.name}
              style={{
                width: "100%",
              margin:"5px"
              }}
              sx={{
                input: {
                  borderBottom:"1px solid #16213E"
                }
              }}
              InputLabelProps={{
                style: { color: '#16213E' },
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <br></br>
            <TextField
              onChange={ handleChange}
              style={{
                width: "100%",
              margin:"5px"
              }}
              sx={{
                input: {
                  borderBottom:"1px solid #16213E"
                }
              }}
              InputLabelProps={{
                style: { color: '#16213E' },
              }}
              InputProps={{
                disableUnderline: true,
              }}
              id="standard-textarea"
              label="enter Description"
              variant="standard"
              name="description"
              value={data?.description}
            />
            <br></br>

            <TextField
              onChange={ handlePrice}
              id="standard-basic"
              label="Price"
              variant="standard"
              style={{
                width: "100%",
              margin:"5px"
              }}
              sx={{
                input: {
                  borderBottom:"1px solid #16213E"
                }
              }}
              InputLabelProps={{
                style: { color: '#16213E' },
              }}
              InputProps={{
                disableUnderline: true,
              }}
              name="actualPrice"
              value={data?.price?.actualPrice}
            />
            <br></br>
            <TextField
              onChange={ handlePrice}
              id="standard-basic"
              label="previousPrice"
              variant="standard"
              style={{
                width: "100%",
              margin:"5px"
              }}
              sx={{
                input: {
                  borderBottom:"1px solid #16213E"
                }
              }}
              InputLabelProps={{
                style: { color: '#16213E' },
              }}
              InputProps={{
                disableUnderline: true,
              }}
              name="previousPrice"
              value={data?.price?.previousPrice}
            />
            <br></br>
            <TextField
              onChange={handlePrice}
              id="standard-basic"
              label="offerPrice"
              variant="standard"
              style={{
                width: "100%",
              margin:"5px"
              }}
              sx={{
                input: {
                  borderBottom:"1px solid #16213E"
                }
              }}
              InputLabelProps={{
                style: { color: '#16213E' },
              }}
              InputProps={{
                disableUnderline: true,
              }}
              name="offerPrice"
              value={data?.price?.offerPrice}
            />
            <br></br>
            <TextField
              onChange={ handleChange}
              id="standard-basic"
              label="Quantity"
              variant="standard"
              name="quantity"
              value={data?.quantity}
              style={{
                width: "100%",
              margin:"5px"
              }}
              sx={{
                input: {
                  borderBottom:"1px solid #16213E"
                }
              }}
              InputLabelProps={{
                style: { color: '#16213E' },
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <br></br>

            <TextField
              onChange={ handleChange}
              id="standard-basic"
              label="Brand"
              variant="standard"
              name="brand"
              value={data?.brand}
              style={{
                width: "100%",
              margin:"5px"
              }}
              sx={{
                input: {
                  borderBottom:"1px solid #16213E"
                }
              }}
              InputLabelProps={{
                style: { color: '#16213E' },
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />

            <Button onClick={handleDataupdate}
              // type="submit"
              style={{
                border: "none",
                marginTop: "15px",
                borderRadius: "10px",
                background: "#144272",
              }}
            >
              Update
            </Button>
          </form>
        </div>
        <div>
          <div
            className="addProductform-image"
            style={{ color: "white",display:"flex", flexDirection:"column",alignItems:"center" }}
          >
            <h5 style={{ color: "#144272", margin: "15px" }}>Add image</h5>
            <label
              style={{
                marginTop: "20px",
                color: "red",
                fontWeight:"bold",
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
                borderRadius: "20px",
              }}
            >

              <input
                onChange={handleImage}
                name="images"
                accept="image/*"
                type="file"
                style={{width:"250px"}}
              />

              {/* <PhotoCamera />
              </IconButton> */}
              {image && (
                <img
                  style={{ width: "100%", height: "100%",marginTop:"20px",marginRight:"20px", objectFit: "cover" }}
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

export default Upateproduct;

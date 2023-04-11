import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SingleProductApi,
  UpdateProductApi,
  
} from "../../Store/ProductSlice";
import "./Addprodutcs.css";
import { useNavigate, useParams } from "react-router-dom";
import Adminform from "../../Components/Admin-components/Adminform";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";

const Upateproduct = () => {
  const [data, setData] = useState();
  const [image, setImage] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [datas, setDatas] = useState();
  const [prices, setPrices] = useState({});


  const { singleproduct } = useSelector((state) => ({
    singleproduct: state.products.singleproduct  
  }));

  console.log(singleproduct);
  const productId = params.id;

  useEffect(() => {
    setDatas(singleproduct);
  },[singleproduct]);

  useEffect(() => {
    dispatch(SingleProductApi(productId));
  },[]);

  const handlePrice = (e) => {
    // setPrices({ ...prices, [e.target.name]: e.target.value });
    setDatas({ ...datas, price: prices });
  };
 
  const handleChange = (e) => {
    // setDatas({ ...datas, [e.target.name]: e.target.value });
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
     dispatch(UpdateProductApi({ datas, navigate,productId}));
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
              // value={datas?.name}
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
              onChange={handleChange}
              id="standard-textarea"
              label="enter Description"
              variant="standard"
              name="description"
              // value={datas?.description}
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
              onChange={handlePrice}
              id="standard-basic"
              label="Price"
              variant="standard"
              name="actualPrice"
              // value={datas?.price?.actualPrice}
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
              onChange={handlePrice}
              name="previousPrice"
              // value={datas?.price?.previousPrice}
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
             
            />
            <br></br>
            <TextField
              onChange={handlePrice}
              id="standard-basic"
              label="offerPrice"
              variant="standard"
              name="offerPrice"
              // value={datas?.price?.offerPrice}
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
              label="Quantity"
              variant="standard"
              name="quantity"
              // value={datas?.quantity}
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
              // value={datas?.brand}
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
              type="submit"
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addproductApi } from "../../Store/ProductSlice";
import { useNavigate } from "react-router-dom";
import Adminform from "../../Components/Admin-components/Adminform";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
// import Adminform from "../../Components/Admin-components/AddProdutcs";

const AddProducts = () => {
 
  const [data, setData] = useState();
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDataSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("photo", image,image.name);
       console.log(formData);
      await dispatch(addproductApi({ data, formData, navigate }));
    } catch (error) {
      console.error(error);
    }
  };
console.log(data);
console.log(image);
  return (
    <div>
      <div className="addproducts" style={{ margin: "20px", display: "flex" }}>
        <div
          className="addProductform"
          
        >
          <h5 style={{ color: "#16213E", margin: "15px" }}>Add Products</h5>
          <form onSubmit={handleDataSubmit}>
            <TextField
              onChange={handleChange}
              id="standard-basic"
              label="Product Name"
              variant="standard"
              name="name"
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
             id="standard-textarea"
             label="enter Description"
             variant="standard"
             name="description"
              onChange={handleChange}
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
            />
            <br></br>
            <TextField
              onChange={handlePrice}
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
              name="
              
              "
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
              id="standard-basic"
              label="Brand"
              variant="standard"
              name="brand"
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
            <TextField
              onChange={handleChange}
              id="standard-basic"
              label="Category"
              variant="standard"
              name="category"
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

            <Button
              type="submit"
              style={{
                border: "none",
                marginTop: "15px",
                borderRadius: "10px",
                background: "#0A2647",
              }}
            >
              Submit
            </Button>
          </form>
        </div>
        <div >
          <div
            className="addProductform-image"
            style={{ color: "white",display:"flex", flexDirection:"column",alignItems:"center" }}
          >
            <h5 style={{ color: "#16213E", margin: "15px"}}>Add Products Image</h5>
            <label
              style={{
                marginTop: "20px",
                color: "#475BE8",
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
              {image && (
                <img
                  style={{ width: "200%", height: "200%",marginTop:"20px",marginRight:"20px", objectFit: "cover" }}
                  src={viewImage}
                  alt="images"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;

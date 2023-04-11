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
     <Adminform handleDataSubmit={handleDataSubmit}heading={"Add"} submitbutton={"Submit"} setImage={setImage} setData={setData} data={data} image={image}/>
    </div>
  );
};

export default AddProducts;

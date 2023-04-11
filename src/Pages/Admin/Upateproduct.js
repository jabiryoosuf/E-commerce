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
  // const [datas, setDatas] = useState();
  // const [prices, setPrices] = useState({});


  const { singleproduct } = useSelector((state) => ({
    singleproduct: state.products.singleproduct  
  }));

  console.log(singleproduct);
  const productId = params.id;

  useEffect(() => {
    setData(singleproduct);
  },[singleproduct]);

  useEffect(() => {
    dispatch(SingleProductApi(productId));
  },[]);

  // const handlePrice = (e) => {
  //   // setPrices({ ...prices, [e.target.name]: e.target.value });
  //   setDatas({ ...datas, price: prices });
  // };
 
  // const handleChange = (e) => {
  //   // setDatas({ ...datas, [e.target.name]: e.target.value });
  // };

  // const handleImage = (e) => {
  //   setImage(e.target.files[0]);
  //   console.log(image);
  // };

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
      <Adminform handleDataupdate={handleDataupdate} heading={"Update"} submitbutton={"Update"} setImage={setImage} setData={setData} data={data} image={image}/>
    </div>
  );
};

export default Upateproduct;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleProductApi, UpdateProductApi } from "../../Store/ProductSlice";
import "./Addprodutcs.css";
import { useNavigate, useParams } from "react-router-dom";
import Adminform from "../../Components/Admin-components/Adminform";

const Upateproduct = () => {
  const [data, setData] = useState();
  const [image, setImage] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { singleproduct } = useSelector((state) => ({
    singleproduct: state.products.singleproduct,
  }));

  console.log(singleproduct);
  const productId = params.id;

  useEffect(() => {
    setData(singleproduct);
  }, [singleproduct]);

  useEffect(() => {
    dispatch(SingleProductApi(productId));
  }, []);

  const handleDataupdate = async (e) => {
    e.preventDefault();
    dispatch(UpdateProductApi({ data, navigate, productId }));
  };

  return (
    <div>
      <Adminform
        handleDataupdate={handleDataupdate}
        heading={"Update"}
        submitbutton={"Update"}
        setImage={setImage}
        setData={setData}
        data={data}
        image={image}
      />
    </div>
  );
};

export default Upateproduct;

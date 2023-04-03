import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { useEffect } from "react";
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {map} from "lodash"
import { DeleteProductApi, allproductsApi } from '../../Store/ProductSlice';
import { useParams } from 'react-router-dom';


const Allproduct = () => {
  const dispatch = useDispatch();
  const params=useParams()
  const { allproduct } = useSelector((state) =>({
    allproduct:state.products.allproduct,
   })); 

   const deletehandle=(productId)=>{
    dispatch(DeleteProductApi(productId)).then(()=>{
      dispatch(allproductsApi())
    })
    
  }

  useEffect(()=>{
    dispatch(allproductsApi())
  },[]);

  const res = allproduct?.Products;
  console.log(res);

    const productId=params.id

 
   

  return (
    <div style={{width:"100%",height:"100vh",display:'flex',alignItems:"center",justifyContent:"center"}}>
      <Table striped bordered hover style={{width:"80%"}}>
        <thead style={{textAlign:"center"}} >
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Brand</th>
            <th>actualPrice</th>
            <th>previousPrice</th>
            <th>offerPrice</th>
            <th>Stock</th>
            <th>Photos</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{textAlign:"center"}}>
        {map(res,(item,index)=>(
        
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.brand}</td>
            <td>{item.price?.actualPrice}</td>
            <td>{item.price?.previousPrice}</td>
            <td>{item.price?.offerPrice}</td>
           
            <td>{item.quantity}</td>
            <td>
                <div style={{width:"30px",height:"30px",background:"blue",borderRadius:"50%",overflow:"hidden" }}>
                {item.images.map((item)=>(
                 <img style={{width:"100%",height:"100%", objectFit:"cover"}} src={item.url} alt="product"/>
                 ))}
                </div>
            </td>
            <td style={{textAlign:"center"}}>
                <VisibilityIcon style={{color:"blue"}}/>
                <EditIcon style={{color:"green",marginInline:"10px"}}/>
                <DeleteIcon onClick={()=>deletehandle(item._id)} style={{color:"red"}}/>
            </td>
          </tr>
            ))}
      
        </tbody>
      </Table>
    </div>
  );
};
export default Allproduct;

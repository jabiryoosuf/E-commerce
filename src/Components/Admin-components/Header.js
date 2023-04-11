import { width } from "@mui/system"
import avatar from "../../images/Profile.png"
import React from 'react'

const Header = () => {
  return (
    <div style={{ background:"#16213E",height:"60px",width:"100%",display:"flex" , justifyContent:"flex-end "}}>
        <div>
            <div style={{width:"50px" ,height:"50px", background:"white", borderRadius:"50%",marginRight:"40px",marginTop:"4px" ,objectFit:"cover",overflow:"hidden"}}>
<img style={{width:"100%"}} src={avatar} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Header
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBlogApi } from '../Store/blogSlice'
import { map } from "lodash";


const BlogCard = () => {
  const{blogs}=useSelector((state)=>state.blogs)
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(getBlogApi())
  },[])
console.log('====================================');
console.log(blogs);
console.log('====================================');
  return (
    <>
    {map(blogs,(blog)=>(
      <div className='blog-card col-3'>
      <div className="cardimage">
        <img src={blog.image}className='img-fluid w-100' alt="blog" />
      </div>
      <div className="blog-content">
        <p className='date'>1 mar,2023</p>
        <h5 className='title'>{blog.title}</h5>
        <p className='desc'>{blog.description}</p>
        <Link to={"/singleblogs/id"} className="button">
          Read More
        </Link>
      </div>
    </div>
     ) )
    }
      </>
      
  )
}

export default BlogCard

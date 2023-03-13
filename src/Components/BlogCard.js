import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
      <div className='blog-card'>
        <div className="cardimage">
          <img src="images/blog-1.jpg"className='img-fluid w-100' alt="blog" />
        </div>
        <div className="blog-content">
          <p className='date'>1 mar,2023</p>
          <h5 className='title'> A beautiful sunday morning renaissances</h5>
          <p className='desc'>Lkjdncskncsk sdcnskcjn jkncksj jkscn jkascnkjcns jksdzckjcnsakknaskd  asjdkn askjdnk </p>
          <Link to={"/singleblogs/id"} className="button">
            Read More
          </Link>
        </div>
      </div>
      
  )
}

export default BlogCard

import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import blog from "../images/blog-1.jpg";

import { Link } from "react-router-dom";
import {HiOutlineArrowLeft} from "react-icons/hi"

const Singleblogs = () => {
  return (
    <>
      <Header />
      <Meta title={"Single blogs"} />
      <BreadCrumb title="Single blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="singl-blog-card">
                <Link className="d-flex align-items-center gap-10" to={"/blogs"} > <HiOutlineArrowLeft className="fs-4"/>Go Back To Blogs</Link>
                <h3 className="title"> abeatuti ful sunday morinufso sdnd</h3>
                <img src={blog}className="img-fluid w-100 my-4" alt="blog" />
                <p>
                  You’re only as good as your last collection, which is an
                  enormous pressure. I think there is something about luxury –
                  it’s not something people need, but it’s what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with money.Scelerisque sociosqu ullamcorper urna nisl mollis
                  vestibulum pretium commodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dis lacus a parturient a
                  accumsan nisl ante vestibulum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Singleblogs;

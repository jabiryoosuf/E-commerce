import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import watch from "../images/watch.jpg";

const Checkout = () => {
  const makePayment = async () => {
  console.log("here...");
  const res = await initializeRazorpay();

  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }
  // Make API call to the serverless API
  const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
    t.json()
  );
  console.log(data);
  var options = {
    key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
    name: "Ismail k Pvt Ltd",
    currency: data.currency,
    amount: data.amount,
    order_id: data.id,
    description: "Thankyou for your test donation",
    image: "https://manuarora.in/logo.png",
    handler: function (response) {
      // Validate payment at server - using webhooks is a better idea.
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "Ismail k",
      email: "ismailkoormath@gmail.com",
      contact: "9999999999",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    // document.body.appendChild(script);

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });

};
return (
  <div>
      <Hero onClick={makePayment} />
   
  </div>
);
}
const Hero = ({ onClick }) => {
  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrumb title="Checkout" />
      <div className="checkout-wrapper py-5 px-5 home-wrapper-2">
        <div className="conteainer-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">shopee</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark total-price" to="/cart">
                        Cart
                      </Link>
                      &nbsp;/
                    </li>
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Information
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Shipping
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">jabirollakal@gmail.com</p>
                <h4 className="mb-3"> Shipping Address</h4>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartment"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        select state
                      </option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="PIN Code"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100 ">
                    <div className="d-flex justify-content-between align-items-center ">
                      <Link to="/cart" className="text-dark">
                        <IoIosArrowRoundBack className="me-2" />
                        Return To Cart
                      </Link>
                      <Link to="/ourstore" className="button">
                        Continue to Shipping
                      </Link>
                      <button onClick={onClick} className="button">
                        Place Order
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <div>
                        <img src={watch} className="img-fluid" alt="product" />
                      </div>
                      <div>
                        <h5 className="total-price">
                          hdfiulkjehrnfildkjnsaifkdskj;alfn
                        </h5>
                        <p className="total-price"> ewihriwhfje</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="flex-grow-1">$ 100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Subtotal</p>
                  <p className="total-price">$ 1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$ 1000</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <p className="total">Total</p>
                <p className="total-price">$ 1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

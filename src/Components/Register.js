import React, { useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Db/Service";
import { ToastContainer, toast } from 'react-toastify';

function Register() {
  const [customerId, setcustomerId] = useState();
  const [customerName, setcustomerName] = useState();
  const [customerEmail, setcustomerEmail] = useState();
  const [passWord, setpassWord] = useState();
  const [conformPassWord, setconformPassWord] = useState();

  let newArray = {
    customerId: parseInt(customerId),
    customerName: customerName,
    customerEmail: customerEmail,
    passWord: passWord,
    conformPassWord: conformPassWord,
  };

  const interval = setInterval(() => {
    updateTime();
  }, 1000);

  function register() {
    Service.CreateCustomer(
      customerId,
      customerName,
      customerEmail,
      passWord,
      conformPassWord
    ).then((res) => {
      console.log(res.data);
    })
    interval();
  }

  function  updateTime(){
    toast.success("Registration completed..", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  }

  return (
    <div>
      <div
        className="card shadow-lg p-3 mb-5 bg-body rounded-4 border border-primary"
        style={{ width: "600px", marginLeft: "450px", marginTop: "50px" }}
      >
        <div className="card-header text-center h3">Register</div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              EnterCustomerId
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="EnterCustomerId"
              value={customerId}
              onChange={(e) => setcustomerId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              EnterCustomerName
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="EnterCustomerName"
              value={customerName}
              onChange={(e) => setcustomerName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              EnterCustomerEmail
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="EnterCustomerName"
              value={customerEmail}
              onChange={(e) => setcustomerEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              EnterCustomerPass
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="EnterCustomerPass"
              value={passWord}
              onChange={(e) => setpassWord(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              ConformPass
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="formGroupExampleInput2"
              placeholder="ConformPass"
              value={conformPassWord}
              onChange={(e) => setconformPassWord(e.target.value)}
            />
          </div>

          <div className="row" id="gridbuttons">
            <div className="col d-grid gap-2 col-5 mx-auto">
              <button
                type="submit"
                className="btn btn-outline-primary"
                onClick={register}
              >
                Register
              </button>
            </div>
            <div className="col d-grid gap-2 col-5 mx-auto">
              <button type="submit" className="btn btn-outline-primary">
                <Link to="/login" className="text-decoration-none">
                  LogIn
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

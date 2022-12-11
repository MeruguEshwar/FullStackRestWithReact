import React from "react";
import { ToastContainer, toast } from 'react-toastify';

function LogIn() {

  const notify = () => toast.success('Please wait while loging..', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

  return (
    <div>
      <div
        className="card shadow-lg p-3 mb-5 bg-body rounded-4 border border-primary"
        style={{ width: "600px", marginLeft: "450px", marginTop: "100px" }}
      >
        <div className="card-header text-center h3">Login</div>
        <div className="card-body">
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              EnterCustomerName
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="EnterCustomerName"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              EnterCustomerEmail
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="EnterCustomerName"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              EnterCustomerPass
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="EnterCustomerPass"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              ConformPass
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="ConformPass"
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto float-start">
            <button type="submit" className="btn btn-outline-primary" onClick={notify}>
              LogIn
            </button>
          </div>

          <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>
    </div>
  );
}

export default LogIn;

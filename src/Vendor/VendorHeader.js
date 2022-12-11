import React, { useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Db/Service";

function VendorHeader() {
  
    const[itemId,setitemId]=useState();
    const[itemName,setitemName]=useState();
    const[itemPrice,setitemPrice]=useState();
    const[resturantName,setresturantName]=useState();
    const[resturantAddress,setresturantAddress]=useState();
    const[image,setimage]=useState();

    let newItem = {
      itemId: parseInt(itemId),
      itemName: itemName,
      itemPrice: itemPrice,
      resturantName: resturantName,
      resturantAddress: resturantAddress,
      image:image
    };

    function additems(){
      Service.AddProducts(itemId,itemName,itemPrice,resturantName,resturantAddress,image).then((res)=>{
        console.log(res.data);
      });
    }

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg rounded-top bg-primary">
          <div className="container">
            <a className="navbar-brand text-dark ms-3 fw-bold" href="#">
              VendorLogin
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item ">
                  <a
                    className="nav-link active text-dark"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    Link
                  </a>
                </li>
              </ul>
              <form className="d-flex me-3" role="search">
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                <button
                  className="btn btn-outline-dark rounded-pill"
                  type="submit"
                >
                  <Link to="/login" className="text-decoration-none text-light">
                    Logout
                  </Link>
                </button>
                <button
                  className="btn btn-outline-dark ms-2 rounded-pill"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add Products
                </button>
                {/* <button className="btn btn-outline-dark ms-2 rounded-pill" type="submit"><Link to="/vendor" className='text-decoration-none'>VendorLogin</Link></button> */}

                {/* <button
                  type="button"
                  className="btn btn-light"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Launch demo modal
                </button> */}
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* AddProducts */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Adding Products
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="ItemName"
                  value={itemName}
                  onChange={e =>setitemName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="ItemPrice"
                  value={itemPrice}
                  onChange={e =>setitemPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="ResturantName"
                  value={resturantName}
                  onChange={e =>setresturantName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="ResturantAddress"
                  value={resturantAddress}
                  onChange={e =>setresturantAddress(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  className="form-control"
                  aria-label="file example"
                  value={image}
                  onChange={e =>setimage(e.target.image[0])}
                  required
                />
                <div className="invalid-feedback">
                  Example invalid form file feedback
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary"  onClick={additems}>
                Add Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorHeader;

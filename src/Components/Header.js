import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const Navigate = useNavigate();

  return (
    <div>
      <div>
        <nav
          className="navbar navbar-expand-lg rounded-top "
          id="headerBackground"
        >
          <div className="container ">
            <a className="navbar-brand text-dark ms-3 fw-bold" href="#">
              FOODELVERY
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
                  <Link to="/login" className="text-decoration-none">
                    SignIn
                  </Link>
                </button>
                <button
                  className="btn btn-outline-dark ms-2 rounded-pill"
                  type="submit"
                >
                  <Link to="/register" className="text-decoration-none">
                    SignUp
                  </Link>
                </button>
                <button
                  className="btn btn-outline-dark ms-2 rounded-pill"
                  type="submit"
                >
                  <Link to="/vendor" className="text-decoration-none">
                    VendorLogin
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

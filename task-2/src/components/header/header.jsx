import React, { Component, Fragment } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
          <div className="container">
            <a className="navbar-brand" href="#">
              <strong>Atrractor school</strong>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent-7"
              aria-controls="navbarSupportedContent-7"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent-7"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto nav-flex-icons">
                <li className="nav-item">
                  <a className="nav-link waves-effect waves-light">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link waves-effect waves-light">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link waves-effect waves-light">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="view intro-2 rgba-gradient">
          <div className="mask">
            <div className="container h-100 d-flex justify-content-center align-items-center">
              <div className="row flex-center pt-5 mt-3">
                <div className="col-md-12 col-lg-6 text-center text-md-left margins">
                  <div className="white-text">
                    <h1
                      className="h1-responsive font-weight-bold wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      Make purchases with our app{" "}
                    </h1>
                    <hr
                      className="hr-light wow fadeInLeft"
                      data-wow-delay="0.3s"
                    />
                    <h6 className="wow fadeInLeft" data-wow-delay="0.3s">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                      veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                      molestiae iste.
                    </h6>
                    <br />
                    <a
                      className="btn btn-white btn-rounded blue-text font-weight-bold ml-lg-0 wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      Download
                    </a>
                    <a
                      className="btn btn-outline-white btn-rounded font-weight-bold wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-12 col-lg-6  wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                    alt="#"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;

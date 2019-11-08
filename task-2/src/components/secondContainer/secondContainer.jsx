import React, { Component } from "react";

class secondContainer extends Component {
  render() {
    return (
      <div className="container-fluid" style={{backgroundColor:"#f9f9f9"}}>
        <div className="container py-4">
          <section>
            <div className="row my-4 pt-5 wow fadeIn" data-wow-delay="0.4s">
              <div className="col-lg-7 col-md-12 mb-4 text-center">
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/screen.jpg"
                  alt=""
                  className="img-fluid z-depth-2 rounded"
                />
              </div>
              <div className="col-lg-5 col-md-12 mb-4 text-left">
                <h2
                  className="mb-3 my-5 dark-grey-text wow fadeIn"
                  data-wow-delay="0.2s"
                >
                  <strong className="font-weight-bold">Download</strong> the
                  application
                </h2>
                <p className="grey-text mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting let. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit.
                </p>
                <a
                  className="btn btn-white btn-rounded blue-text font-weight-bold ml-0 wow fadeIn"
                  data-wow-delay="0.2s"
                >
                  <i className="fab fa-android pr-2" aria-hidden="true"></i> Play
                  store
                </a>
                <a
                  className="btn btn-white btn-rounded blue-text font-weight-bold wow fadeIn"
                  data-wow-delay="0.2s"
                >
                  <i className="fab fa-apple pr-2" aria-hidden="true"></i> App store
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default secondContainer;
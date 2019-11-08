import React,{Component} from 'react';

class Thirdcontainer extends Component{
  render(){
    return(
      <div className="streak streak-md streak-photo"
      style={{backgroundImage:"url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg')"}}>
      <div className="flex-center white-text blue-gradient-mask">
        <div className="container py-3">
          <section className="wow fadeIn" data-wow-delay="0.2s">
            <h1 className="py-5 my-5 white-text text-center wow fadeIn" data-wow-delay="0.2s"><strong
                className="font-weight-bold">Lorem ipsum</strong> dolor sit amet</h1>
            <div className="row features-small mb-5">
              <div className="col-md-12 col-lg-4">
                <div className="row mb-5">
                  <div className="col-3">
                    <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-tablet-alt blue-text"
                        aria-hidden="true"></i></a>
                  </div>
                  <div className="col-9">
                    <h5 className="font-weight-bold white-text">Fully responsive</h5>
                    <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                      maiores.</p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-3">
                    <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-level-up-alt blue-text"
                        aria-hidden="true"></i></a>
                  </div>
                  <div className="col-9">
                    <h5 className="font-weight-bold white-text">Frequent updates</h5>
                    <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                      maiores.</p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-3">
                    <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-phone blue-text"
                        aria-hidden="true"></i></a>
                  </div>
                  <div className="col-9">
                    <h5 className="font-weight-bold white-text">Technical support</h5>
                    <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                      maiores nam.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 px-5 mb-2 text-center text-md-left flex-center">
                <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new1.png" alt=""
                  className="z-depth-0 img-fluid"/>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="row mb-5">
                  <div className="col-3">
                    <a type="button" className="btn-floating white btn-lg my-0"><i className="far fa-object-group blue-text"
                        aria-hidden="true"></i></a>
                  </div>
                  <div className="col-9">
                    <h5 className="font-weight-bold white-text">Editable layout</h5>
                    <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                      maiores nam.</p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-3">
                    <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-rocket blue-text"
                        aria-hidden="true"></i></a>
                  </div>
                  <div className="col-9">
                    <h5 className="font-weight-bold white-text">Fast and powerful</h5>
                    <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                      maiores nam.</p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-3">
                    <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-cloud-upload-alt blue-text"
                        aria-hidden="true"></i></a>
                  </div>
                  <div className="col-9">
                    <h5 className="font-weight-bold white-text">Cloud storage</h5>
                    <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                      maiores nam.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    )
  }
}

export default Thirdcontainer;
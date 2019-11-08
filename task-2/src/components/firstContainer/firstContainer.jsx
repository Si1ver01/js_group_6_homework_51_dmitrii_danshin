import React,{Component} from 'react';

class Firstcontainer extends Component{
  render(){
    return(
      <div className="container">
      <section id="features" className="mb-5">
        <h1 className="mb-3 my-5 pt-5 dark-grey-text wow fadeIn text-center" data-wow-delay="0.2s"><strong
            className="font-weight-bold">Lorem ipsum</strong> dolor sit amet</h1>
        <p className="text-center grey-text w-responsive mx-auto mb-5 wow fadeIn" data-wow-delay="0.2s">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas, eos officia maiores ipsam ipsum
          dolores reiciendis
          ad voluptas, animi obcaecati adipisci sapiente mollitia.</p>
        <div className="row features wow fadeIn" data-wow-delay="0.2s">
          <div className="col-lg-4 text-center">
            <div className="icon-area">
              <div className="circle-icon">
                <i className="fas fa-cogs blue-text"></i>
              </div>
              <br/>
              <h5 className="dark-grey-text font-weight-bold mt-2">Customization</h5>
              <div className="mt-1">
                <p className="mx-3 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                  ipsum dolor sit
                  amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="icon-area">
              <div className="circle-icon">
                <i className="fas fa-book blue-text"></i>
              </div>
              <br/>
              <h5 className="dark-grey-text font-weight-bold mt-2">Easy tutorials</h5>
              <div className="mt-1">
                <p className="mx-3 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                  ipsum dolor sit
                  amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center mb-4">
            <div className="icon-area">
              <div className="circle-icon">
                <i className="fas fa-users blue-text"></i>
              </div>
              <br/>
              <h5 className="dark-grey-text font-weight-bold mt-2">Free support</h5>
              <div className="mt-1">
                <p className="mx-3 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                  ipsum dolor sit
                  amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
  }
}
export default Firstcontainer;
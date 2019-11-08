import React from "react";

const Poster = props => {
  return (
    <div className="card col-4 card-cascade wider">
      <div className="view  view-cascade overlay">
        <img
          className="card-img-top"
          src={props.url}
          alt=""
        />
        <a href="#!">
          <div className="mask rgba-white-slight"></div>
        </a>
      </div>

      <div className="card-body card-body-cascade text-center pb-0">
        <h4 className="card-title">
          <strong>{props.name}</strong>
        </h4>

        <p className="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.{" "}
        </p>

        <div className="card-footer text-muted text-center mt-4">{props.year} год</div>
      </div>
    </div>
  );
};

export default Poster;

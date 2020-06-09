import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <div
        id="myCarousel"
        style={{ width: "85%", marginLeft: "auto", marginRight: "auto" }}
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="item active">
            <img
              src="https://www.askonlinesolutions.com/wp-content/uploads/2018/09/mobile-banner.jpg"
              alt="Banner1"
            />
          </div>

          <div className="item">
            <img
              src="https://www.askonlinesolutions.com/wp-content/uploads/2018/09/mobile-banner.jpg"
              alt="Banner2"
            />
          </div>

          <div className="item">
            <img
              src="https://www.askonlinesolutions.com/wp-content/uploads/2018/09/mobile-banner.jpg"
              alt="Banner3"
            />
          </div>
        </div>
        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Banner;

import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="col-xs-11 col-lg-11 col-md-11 col-sm-11">
          <a
            className="navbar-brand"
            href="#"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Mobile Store
          </a>
          <ul className="nav navbar-nav">
            <li>
              <a style={{ fontWeight: "bold" }} href="#">
                Trang chủ
              </a>
            </li>
            <li>
              <a style={{ fontWeight: "bold" }} href="#">
                Danh mục sản phẩm
              </a>
            </li>
            <li>
              <a style={{ fontWeight: "bold" }} href="#">
                Liên hệ
              </a>
            </li>
            <li>
              <a style={{ fontWeight: "bold" }} href="#">
                Ưu đãi
              </a>
            </li>
            <li>
              <a style={{ fontWeight: "bold" }} href="#">
                Khác
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xs-1 col-lg-1 col-md-1 col-sm-1">
          <ul className="nav navbar-nav">
            <li>
            <button style={{marginTop: "2%"}} type="button" className="btn btn-default btn-lg">
          <span className="glyphicon glyphicon-shopping-cart"></span> <span className="label label-danger">{this.props.value}</span>
        </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

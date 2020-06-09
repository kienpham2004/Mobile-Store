import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Product from "./Component/Product/Product";
import Banner from "./Component/Banner/banner";
import SoftProductName from "./Component/SoftProduct/SoftProductName";
import SoftProductPrice from "./Component/SoftProduct/SoftProductPrice";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {/* header */}
        <Header />

        {/* banner */}
        <div style={{ marginLeft: "30px", marginRight: "30px" }}>
          <Banner></Banner>{" "}
        </div>
        <br></br>
        {/* SoftProduct */}
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <SoftProductPrice></SoftProductPrice>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <SoftProductName />
          </div>
        </div>
        <br></br>
        <hr></hr>
        {/* content */}
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <Product />
        </div>
      </div>
    );
  }
}

export default App;

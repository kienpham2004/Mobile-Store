import React, { Component } from "react";

class SoftProductName extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12">
          <select style={{marginTop: "1%"}} id="cars" name="softProductPriceUpAndDown" form="softProduct">
            <option value="1">Sắp xếp theo giá tăng dần</option>
            <option value="2">Sắp xếp theo giá giảm dần</option>
          </select>
          <select id="cars" name="softProductName" form="softProduct">
            <option value="1">Sắp xếp theo thứ tự A - Z</option>
            <option value="2">Sắp xếp theo thứ tự Z - A</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SoftProductName;

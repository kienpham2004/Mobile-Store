import React, { Component } from "react";
import listProduct from "./listProduct.json";
class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Product: listProduct,
    };
  }

  render() {
    const a = {
      fontWeight: "bold",
      fontSize: "18px",
      marginBottom: "-1px",
      marginTop: "-15px",
    };
    let element = this.state.Product.map((listProduct, index) => {
      let result = "";
      if (listProduct.status) {
        result = (
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index}>
            <div
              style={{
                backgroundColor: "#E1E1E1",
                boxShadow: "5px 10px 18px #888888",
              }}
              className="thumbnail"
            >
              <img src={listProduct.urlImage} alt="anh" />
              <div className="caption">
                <span className="label label-success">
                  {listProduct.status ? "Còn hàng" : "Hết hàng"}
                </span>
                <p style={{ fontSize: "12px" }}>
                  Còn lại: {listProduct.remain}
                </p>
                <p style={a}>{listProduct.name}</p>
                <p>
                  {listProduct.price}
                  &nbsp;
                  {listProduct.currencyUnit}
                </p>
                <button className="btn btn-success">Mua hàng </button>
                &nbsp; &nbsp;
                <button className="btn btn-primary">Chi tiết</button>
              </div>
            </div>
          </div>
        );
      } else {
        result = (
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index}>
            <div
              style={{
                backgroundColor: "#E1E1E1",
                boxShadow: "5px 10px 18px #888888",
              }}
              className="thumbnail"
            >
              <img src={listProduct.urlImage} alt="anh" />
              <div className="caption">
                <span className="label label-danger">
                  {listProduct.status ? "Còn hàng" : "Hết hàng"}
                </span>
                <p style={{ fontSize: "12px" }}>
                  Còn lại: {listProduct.remain}
                </p>
                <p style={a}>{listProduct.name}</p>
                <p>
                  {listProduct.price}
                  &nbsp;
                  {listProduct.currencyUnit}
                </p>
                <button className="btn btn-success disabled">Mua hàng</button>
                &nbsp; &nbsp;
                <button className="btn btn-primary">Chi tiết</button>
              </div>
            </div>
          </div>
        );
      }
      return result;
    });
    return <div className="container-fluid">{element}</div>;
  }
}

export default Product;

// render() {
//   let element = listProduct.map((listProduct, index) => {
//     return (
//       <ShowProduct
//         key={listProduct.id}
//         name={listProduct.name}
//         price={listProduct.price}
//         img={listProduct.urlImage}
//         status={listProduct.status ? "Còn hàng" : "Hết hàng"}
//         remain={listProduct.remain}
//         currencyUnit={listProduct.currencyUnit}
//       ></ShowProduct>
//     );
//   });
//   return (
//     <div className="row">
//       <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12">{element}</div>
//     </div>
//   );
// }

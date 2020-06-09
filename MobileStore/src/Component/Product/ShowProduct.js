// import React, { Component } from "react";
// import listProduct from "./listProduct.json";

// class ShowProduct extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       listProduct
//     }
//     this.onOrderMoble = this.onOrderMoble.bind(this);
//   }

//   // Nếu dùng arrow function thì không cần contructor để bind dữ liệu như trên.

//   onOrderMoble = () => {
//     if (this.props.status == "Còn hàng") {
//       alert("You have successfully order the product " + this.props.name + "!");
//     } else {
//       alert("Product " + this.props.name + " out of sock! ");
//     }
//   };
//   render() {
//     const a = {
//       fontWeight: "bold",
//       fontSize: "18px",
//       marginBottom: "-1px",
//       marginTop: "-15px",
//     };
//     return (
//       <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
//         <div
//           style={{
//             backgroundColor: "#E1E1E1",
//             boxShadow: "5px 10px 18px #888888",
//           }}
//           className="thumbnail"
//         >
//           <img src={this.props.img} alt="anh" />
//           <div className="caption">
//             <span className="label label-danger">{this.props.status}</span>
//             <p style={{ fontSize: "12px" }}>Còn lại: {this.props.remain}</p>
//             <p style={a}>{this.props.name}</p>
//             <p>
//               {this.props.price}
//               &nbsp;
//               {this.props.currencyUnit}
//             </p>
//             <button className="btn btn-success" onClick={this.onOrderMoble}>
//               Mua hàng
//             </button>
//             &nbsp; &nbsp;
//             <button className="btn btn-primary">Chi tiết</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ShowProduct;

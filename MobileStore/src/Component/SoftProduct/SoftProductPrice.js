import React, { Component } from "react";

class SoftProductPrice extends React.Component {
  render() {
    const a = {
      width: "150px",
    };
    return (
      <div className="row">
        <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12">
          <button style={a} type="button" className="btn btn-default">
            <span> Từ 5- 7 triệu</span>
          </button>
          &ensp;
          <button style={a} type="button" className="btn btn-default">
            <span> Từ 7- 9 triệu</span>
          </button>
          &ensp;
          <button style={a} type="button" className="btn btn-default">
            <span> Từ 9- 15 triệu</span>
          </button>
          &ensp;
          <button style={a} type="button" className="btn btn-default">
            <span> Từ 15 >= triệu</span>
          </button>
          {/* Nút thêm sản phẩm */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Thêm
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h3
                    style={{ textAlign: "center" }}
                    className="modal-title"
                    id="exampleModalLabel"
                  >
                    Thêm sản phẩm:
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </h3>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Hủy
                  </button>
                  <button type="button" className="btn btn-primary">
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SoftProductPrice;

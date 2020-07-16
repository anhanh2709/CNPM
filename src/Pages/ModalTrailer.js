import React, { Component } from "react";
import { connect } from "react-redux";

class ModalTrailer extends Component {
  renderModalTrailer = () => {
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="trailerMovie"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <img src="img/close.png" alt />
                </span>
              </button>
              <iframe
                src="https://www.youtube.com/embed/OGfm7CNM5BY"
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    let { modalTrailer } = this.props;
    console.log(modalTrailer);
    return <div> </div>;
  }
}

export default connect()(ModalTrailer);

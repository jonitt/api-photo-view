import React from "react";
import PhotoRouter from "./photo_router.jsx";
import { withRouter } from "react-router-dom";

class PhotoRouterContainer extends React.Component {
  redirectTo(url) {
    this.props.history.push(url);
  }

  render() {
    return (
      <PhotoRouter
        showPhotoList={this.props.showPhotoList}
        handleRedirect={url => this.redirectTo(url)}
        photos={this.props.photos}
        photosSize={this.props.photosSize}
        photosPerPage={this.props.photosPerPage}
      />
    );
  }
}

export default withRouter(PhotoRouterContainer);

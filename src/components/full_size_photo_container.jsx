import React from "react";
import FullSizePhoto from "./full_size_photo.jsx";

/*
  This component displays a photo in it's fullsize, with a background
  that directs the user to the set url.

  @props:
    photoUrl: src of photo
    linkTo: link to url, when background is clicked
    allowBodyScrolling: allow scrolling of html body
    preventBodyScrolling: prevent html body scrolling
*/
class FullSizePhotoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.zoomPicture = this.zoomPicture.bind(this);

    this.state = {
      imgClass: "full_size_photo",
      zoomed: false,
      infoClass: "full_size_photo_info"
    };
  }

  componentDidMount() {
    this.props.preventBodyScrolling();
  }

  componentWillUnmount() {
    this.props.allowBodyScrolling();
  }

  /*
    Returns classes to use when zoomed or unzoomed
  */
  zoomPicture() {
    if (this.state.zoomed) {
      this.setState({
        zoomed: false,
        imgClass: "full_size_photo",
        infoClass: "full_size_photo_info"
      });
    } else {
      this.setState({
        zoomed: true,
        imgClass: "full_size_photo_zoomed",
        infoClass: "hidden"
      });
    }
  }

  render() {
    return (
      <FullSizePhoto
        linkTo={this.props.linkTo}
        photoUrl={this.props.photoUrl}
        title={this.props.title}
        imgClass={this.state.imgClass}
        infoClass={this.state.infoClass}
        zoomPicture={() => this.zoomPicture()}
      />
    );
  }
}

export default FullSizePhotoContainer;

import React from "react";
import { Link } from "react-router-dom";

/*
  This component displays a photo in it's fullsize, with a background
  that directs the user to the set url.

  @props:
    photoUrl: src of photo
    linkTo: link to url, when background is clicked
    zoomPicture: function for deciding the classes 
*/
class FullSizePhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgClass: "full_size_photo",
      infoClass: "full_size_photo_info"
    };
  }

  render() {
    return (
      <div className="full_size_photo_container">
        <Link to={this.props.linkTo} className="grey_shade_background" />
        <div className="full_size_photo_image_info_container">
          <img
            onClick={() => this.setState(this.props.zoomPicture)}
            src={this.props.photoUrl}
            className={this.state.imgClass}
          />
          <div className={this.state.infoClass}>{this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default FullSizePhoto;

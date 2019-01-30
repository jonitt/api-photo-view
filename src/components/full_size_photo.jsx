import React from "react";
import { Link } from "react-router-dom";

/*
  This component displays a photo in it's fullsize, with a background
  that directs the user to the set url.

  @props:
    photoUrl: src of photo
    linkTo = link to url, when background is clicked
*/
class FullSizePhoto extends React.Component {
  constructor(props) {
    super(props);

    this.zoomPicture = this.zoomPicture.bind(this);

    this.state = {
      imgClass: "full_size_photo",
      zoomed: false,
      infoClass: "full_size_photo_info"
    }
  }

  componentDidMount() {
    this.props.preventBodyScrolling();
  }

  componentWillUnmount() {
    this.props.allowBodyScrolling();
  }

  zoomPicture() {
    if(this.state.zoomed) {
      this.setState({
        imgClass: "full_size_photo",
        zoomed: false,
        infoClass: "full_size_photo_info"
      });
    }
    else {
      this.setState({
        imgClass: "full_size_photo_zoomed",
        zoomed: true,
        infoClass: "hidden"
      });
    }
  }

  render() {
    return(
      <div className="full_size_photo_container">
        <Link to={this.props.linkTo} className="grey_shade_background">
        </Link>
        <div className="full_size_photo_image_info_container">
          <img onClick={this.zoomPicture} src={this.props.photoUrl} className={this.state.imgClass}></img>
          <div className={this.state.infoClass}>
            Laus elatus kalauts kulatus
          </div>
        </div>
      </div>
    );
  }
}

export default FullSizePhoto;

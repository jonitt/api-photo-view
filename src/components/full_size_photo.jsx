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
  }

  render() {
    return(
      <div>
        <Link to={this.props.linkTo} className="grey_shade_background">
        </Link>
        <img src={this.props.photoUrl} className="full_size_photo"></img>
      </div>
    );
  }
}

export default FullSizePhoto;

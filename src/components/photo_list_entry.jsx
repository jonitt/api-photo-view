import React from "react";
import { Link } from "react-router-dom";

/*
  This component shows a photos thumbnail picture as a clickable link,
  that leads to the set url. Width and height of the photo are restricted.

  @props:
    photo: photo object
    handleClick: handler for clicking the photo
    num: index in a list
    linkTo: url where clicking the thumbnail directs to
*/
class PhotoListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <li className="photo_list_entry">
        <Link to={this.props.linkTo}>
          <img className="photo_list_entry_img" onClick={() => this.props.handleClick(this.props.num)} src={this.props.photo.thumbnailUrl}></img>
        </Link>
      </li>
    );
  }
}

export default PhotoListEntry;

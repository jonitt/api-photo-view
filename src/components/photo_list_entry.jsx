import React from "react";
import { Link } from "react-router-dom";

/*
  @props:
    photo: photo object
    handleClick: handler for clicking the photo
    num: index in a list
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
          <img onClick={() => this.props.handleClick(this.props.num)} src={this.props.photo.thumbnailUrl}></img>
        </Link>
      </li>
    );
  }
}

export default PhotoListEntry;

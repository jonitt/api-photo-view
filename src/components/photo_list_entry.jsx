import React from "react";

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
        <img onClick={() => this.props.handleClick(this.props.num)} src={this.props.photo.thumbnailUrl}></img>
      </li>
    );
  }
}

export default PhotoListEntry;

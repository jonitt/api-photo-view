import React from "react";
import { Link } from "react-router-dom";

/*
  This component shows a photos thumbnail picture as a clickable link,
  that leads to the set url. Width and height of the photo are restricted.

  @props:
    photo: photo object
    linkTo: url where clicking the thumbnail directs to
*/
const PhotoListEntry = props => (
  <li className="photo_list_entry">
    <Link to={props.linkTo}>
      <img className="photo_list_entry_img" src={props.photo.thumbnailUrl} />
    </Link>
  </li>
);

export default PhotoListEntry;

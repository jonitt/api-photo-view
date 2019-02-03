import React from "react";
import { Link } from "react-router-dom";
import Style from "./style.scss";

/*
  This component displays a photo in it's fullsize, with a background
  that directs the user to the set url.

  @props:
    photoUrl: src of photo
    linkTo: link to url, when background is clicked
    zoomPicture: function for deciding the classes
    imgClass: class of image
    infoClass: class of info
*/
const FullSizePhoto = (props) => (
  <div className="full_size_photo_container">
    <Link to={props.linkTo} className="grey_shade_background" />
    <div className="full_size_photo_image_info_container">
      <img
        onClick={props.zoomPicture}
        src={props.photoUrl}
        className={props.imgClass}
      />
      <div className={props.infoClass}>{props.title}</div>
    </div>
  </div>
);

export default FullSizePhoto;

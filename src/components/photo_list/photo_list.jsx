import React from "react";
import Pagination from "react-js-pagination";
import FullSizePhotoContainer from "../full_size_photo/full_size_photo_container.jsx";
import { withRouter, Route, Link } from "react-router-dom";
import Style from "./style.scss";

/*
  This component lists set amount of photos' thumbnails on a page.
  The component includes a pagination component, which by using
  user can browse between different pages.

  @props
    photos: object of the photos
    photosSize: amount of photos
    pageNumber: number of page (starts from 1)
    photosPerPage: amount of photo thumbnails to show on a page
    preventBodyScrolling: prevent scrolling of html body
    allowBodyScrolling: alllow sctolling of html body
*/
const PhotoList = props => (
  <div className="photo_list">
    {props.shownFullSizePhoto}
    <ul>{props.shownThumbnails}</ul>
    {/* Pagination links lead to a page with matching number */}
    <Pagination
      onChange={pageNum => {
        props.redirectTo("/page" + pageNum);
      }}
      activePage={parseInt(props.pageNumber)}
      itemsCountPerPage={props.photosPerPage}
      totalItemsCount={props.photosSize}
      pageRangeDisplayed={5}
      linkClass="photo_list_pagination_entry_link"
      innerClass="photo_list_pagination"
      activeClass="photo_list_pagination_selected"
      activeLinkClass="photo_list_pagination_selected_link"
      itemClassFirst="photo_list_pagination_entry photo_list_pagination_entry_first"
      itemClass="photo_list_pagination_entry"
      hideDisabled="true"
    />
    {/* Routing to full photos based on photo's number (id) */}
    <Route
      path={props.match.url + "/img/:id(\\d+)"}
      render={({ match }) => {
        return (
          <FullSizePhotoContainer
            photoUrl={props.photos[match.params.id].url}
            title={props.photos[match.params.id].title}
            linkTo={"/page" + props.pageNumber}
            preventBodyScrolling={() => props.preventBodyScrolling()}
            allowBodyScrolling={() => props.allowBodyScrolling()}
          />
        );
      }}
    />
  </div>
);

export default withRouter(PhotoList);

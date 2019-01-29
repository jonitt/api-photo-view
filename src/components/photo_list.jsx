import React from "react";
import Pagination from "react-js-pagination";
import PhotoListEntry from "./photo_list_entry.jsx";
import FullSizePhoto from "./full_size_photo.jsx";
import { withRouter, Route, Link,  } from 'react-router-dom';
/*
  @props
    photos: object of the photos
    photosSize: amount of photos
    pageNumber: number of page (starts from 1)
    photosPerPage: amount of photo thumbnails to show on a page
*/
class PhotoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "shownThumbnails": [],
      "redirectElsewhere": false,
      "redirectTo": ""
    };
  }

  componentDidMount() {
    this.showThumbnails();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.pageNumber != this.props.pageNumber) {
      this.resetThumbnails();
    }
  }

  //Creates components to show from photos' thumbnails.
  //The thumbnails also work as links to the full-sized pictures
  showThumbnails() {
    let photosPerPage = parseInt(this.props.photosPerPage);
    let i = photosPerPage * (parseInt(this.props.pageNumber) - 1);
    let limit = i + photosPerPage;
    for(; i < limit; i++) {
      this.state.shownThumbnails[i] =
        <PhotoListEntry linkTo={this.props.match.url + "/img/" + i} handleClick={()=>null} num={i} photo={this.props.photos[i]} key={this.generateKey()} />
    }
    this.setState({
      "shownThumbnails": this.state.shownThumbnails
    });
  }

  //Remove old shown thumbnails and set new ones.
  //Also, moves the user to top of page.
  resetThumbnails() {
    this.state.shownThumbnails = [];
    this.showThumbnails();
    window.scrollTo(0, 0);
  }

  //create random key
  generateKey() {
    return Math.random().toString(36).substr(2, 16);
  }

  componentDidCatch(e, i) {
    console.log(e + " : " + i);
  }

  render() {
    return(
      <div className="photo_list">
        {this.state.shownFullSizePhoto}
        <ul>
          {this.state.shownThumbnails}
        </ul>
        {/* Routing to full photos based on photo's number (id) */}
        <Route path={this.props.match.url + "/img/:id(\\d+)"} render={({ match }) => { return(
          <FullSizePhoto photoUrl={this.props.photos[match.params.id].url}
          handleOutOfFocus={() => null} linkTo={"/page" + this.props.pageNumber} />
          )}}
        />
        {/* Pagination links lead to a page with matching number */}
        <Pagination onChange={(pageNum) => {
        this.props.handleRedirect("/page" + pageNum);
          }} activePage={parseInt(this.props.pageNumber)} itemsCountPerPage={this.props.photosPerPage} totalItemsCount={this.props.photosSize} pageRangeDisplayed={5} itemClass="photo_list_pagination_entry"
        />
      </div>
    );
  }
}

export default withRouter(PhotoList);

import React from "react";
import { withRouter } from "react-router-dom";
import PhotoList from "./photo_list.jsx";
import PhotoListEntry from "./photo_list_entry.jsx";

/*
  This component lists set amount of photos' thumbnails on a page.
  The component includes a pagination component, which by using
  user can browse between different pages.

  @props
    photos: object of the photos
    photosSize: amount of photos
    pageNumber: number of page (starts from 1)
    photosPerPage: amount of photo thumbnails to show on a page
*/
class PhotoListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shownThumbnails: []
    };
  }

  componentDidMount() {
    this.showThumbnails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pageNumber != this.props.pageNumber) {
      this.resetThumbnails();
    }
  }

  //Creates components to show from photos' thumbnails.
  //The thumbnails also work as links to the full-sized pictures
  showThumbnails() {
    let photosPerPage = parseInt(this.props.photosPerPage);
    let i = photosPerPage * (parseInt(this.props.pageNumber) - 1);
    let limit = i + photosPerPage;
    for (; i < limit; i++) {
      this.state.shownThumbnails[i] = (
        <PhotoListEntry
          linkTo={this.props.match.url + "/img/" + i}
          num={i}
          photo={this.props.photos[i]}
          key={this.generateKey()}
        />
      );
    }
    this.setState({
      shownThumbnails: this.state.shownThumbnails
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
    return Math.random()
      .toString(36)
      .substr(2, 16);
  }

  allowBodyScrolling() {
    document.body.classList.remove("no_scroll");
  }

  preventBodyScrolling() {
    document.body.classList.add("no_scroll");
  }

  redirectTo(url) {
    this.props.history.push(url);
  }

  render() {
    return (
      <PhotoList
        shownFullSizePhoto={this.state.shownFullSizePhoto}
        shownThumbnails={this.state.shownThumbnails}
        activePage={parseInt(this.props.pageNumber)}
        photos={this.props.photos}
        photosSize={this.props.photosSize}
        photosPerPage={this.props.photosPerPage}
        pageNumber={this.props.pageNumber}
        preventBodyScrolling={() => this.preventBodyScrolling()}
        allowBodyScrolling={() => this.allowBodyScrolling()}
        redirectTo={url => this.redirectTo(url)}
      />
    );
  }
}

export default withRouter(PhotoListContainer);

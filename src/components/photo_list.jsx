import React from "react";
import Pagination from "react-js-pagination";
import PhotoListEntry from "./photo_list_entry.jsx";
import FullSizePhoto from "./full_size_photo.jsx";
import { withRouter } from 'react-router-dom';
import { Route, Link } from "react-router-dom";
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
      "shownThumbnails": []
    };
  }

  componentDidMount() {
    this.showThumbnails();
  }

  //Creates components to show from photos' thumbnails.
  //The thumbnails also work as links to the full-sized pictures
  showThumbnails() {
    let photosPerPage = parseInt(this.props.photosPerPage);
    let i = photosPerPage * (parseInt(this.props.pageNumber) - 1);
    let limit = i + photosPerPage;
    for(; i < limit; i++) {
      this.state.shownThumbnails[i] =
        <Link to={this.props.match.url + "/img/" + i} key={this.generateKey()}>
          <PhotoListEntry handleClick={()=>null} num={i} photo={this.props.photos[i]} />
        </Link>
    }
    this.setState({
      "shownThumbnails": this.state.shownThumbnails
    });
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
        <Route path="/pic1" render={() => <FullSizePhoto photoUrl="https://via.placeholder.com/600/d32776" />} />
        {/* Pagination links lead to a page with matching number */}
        <Pagination onChange={(pageNum) => {
          this.props.history.push("/page" + pageNum);
          }} activePage={parseInt(this.props.pageNumber)} itemsCountPerPage={this.props.photosPerPage} totalItemsCount={this.props.photosSize} pageRangeDisplayed={5} itemClass="photo_list_pagination_entry"
        />
      </div>
    );
  }
}

export default withRouter(PhotoList);

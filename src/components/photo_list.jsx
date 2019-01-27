import React from "react";
//import { withRouter } from 'react-router-dom'
import Pagination from "react-js-pagination";
import PhotoListEntry from "./photo_list_entry.jsx";
import FullSizePhoto from "./full_size_photo.jsx";
import { withRouter } from 'react-router-dom';
import { Route, Link } from "react-router-dom";
/*
  @props
    photos: json object of the photos
*/
class PhotoList extends React.Component {
  constructor(props) {
    super(props);

    this.photosPerPage = 100;

    this.state = {
      "shownThumbnails": [],
      "shownFullSizePhoto": null,
      "photoRoutes": []
    };
  }

  componentDidMount() {
    this.showThumbnails();

    this.setRoutes(this.props.photos);
  }

  setRoutes(photos) {
    for(let i = 0; i < photos.length; i++) {
      this.state.photoRoutes[i] =
        <Route path={"/img" + i} key={this.generateKey()}
          render={() => <FullSizePhoto photoUrl={photos[i].url} handleOutOfFocus={() => this.closePhoto()} />}>
        </Route>
    }
    console.log(this.state.photoRoutes)
    this.setState({
      photoRoutes: this.state.photoRoutes
    });
  }

  //show thumbnails of photos
  showThumbnails() {
    for(let i = 0; i < 100; i++) {
      this.state.shownThumbnails[i] = <Link to={"/img"+i}><PhotoListEntry handleClick={(index) => this.openPhoto(index, this.props.photos)} num={i} photo={this.props.photos[i]} key={this.generateKey()} /></Link>
    }
    this.setState({
      "shownThumbnails": this.state.shownThumbnails
    });
  }

  //show full-sized photo of index in photos
  openPhoto(index, photos) {
    /*
    this.props.history.push("/asdasdsd");
    this.setState({
      shownFullSizePhoto: <FullSizePhoto handleOutOfFocus={() => this.closePhoto()} photoUrl={photos[index].url} />
    });
    */
  }

  closePhoto() {
    this.setState({
      shownFullSizePhoto: null
    });
  }

  //create random key
  generateKey() {
    return Math.random().toString(36).substr(2, 16);
  }

  fetchPhoto(url) {
    fetch(url, {mode: "no-cors"})
      .then(res => res.json())
      .then(json =>
        this.setState({
          "shownThumbnails": [this.props.photos[1].thumbnailUrl]
        })
      );
  }

  render() {
    return(
      <div className="photo_list">
        {this.state.shownFullSizePhoto}
        <ul>
          {this.state.shownThumbnails}
        </ul>
        <Route path="/pic1" render={() => <FullSizePhoto photoUrl="https://via.placeholder.com/600/d32776" />} />
        <Pagination itemsCountPerPage={10} totalItemsCount={450} pageRangeDisplayed={5} itemClass="photo_list_pagination_entry" />
        {this.state.photoRoutes}
      </div>
    );
  }
}

export default withRouter(PhotoList);

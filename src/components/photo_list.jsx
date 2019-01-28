import React from "react";
import Pagination from "react-js-pagination";
import PhotoListEntry from "./photo_list_entry.jsx";
import FullSizePhoto from "./full_size_photo.jsx";
import { withRouter } from 'react-router-dom';
import { Route, Link } from "react-router-dom";
/*
  @props
    photos: json object of the photos
    photosSize: amount of photos
    pageNumber: number of page
    photosPerPage: amount of photo thumbnails to show on a page
*/
class PhotoList extends React.Component {
  constructor(props) {
    super(props);

    this.photosPerPage = 100;

    this.state = {
      "shownThumbnails": []
    };
  }

  componentDidMount() {
    this.showThumbnails();
  }

  //show thumbnails of photos
  showThumbnails() {
    for(let i = 0; i < 100; i++) {
      this.state.shownThumbnails[i] =
        <Link to={"/img/"+i} key={this.generateKey()}>
          <PhotoListEntry handleClick={()=>null} num={i} photo={this.props.photos[i]} />
        </Link>
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
        <Route path={"/img/:id(\\d+)"}
          render={({ match }) => {
          return(<FullSizePhoto photoUrl={this.props.photos[match.params.id].url} handleOutOfFocus={() => null} />)
          }}
        />
        <Route path="/pic1" render={() => <FullSizePhoto photoUrl="https://via.placeholder.com/600/d32776" />} />
        <Pagination itemsCountPerPage={this.props.photosPerPage} totalItemsCount={this.props.photosSize} pageRangeDisplayed={5} itemClass="photo_list_pagination_entry" />
      </div>
    );
  }
}

export default withRouter(PhotoList);

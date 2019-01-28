import React, { Component } from "react";
import { HashRouter, BrowserRouter, Link, Route } from "react-router-dom";
import PhotoList from "./photo_list.jsx";
import PageHeader from "./page_header.jsx";
import CustomRouter from "./custom_router.jsx";

import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.photosUrl = "http://jsonplaceholder.typicode.com/photos";

    this.fetchPhotos();

    this.state = {
      photos: [],
      photosSize: 0,
      showPhotoList: false
    }
  }

  fetchPhotos() {
    fetch(this.photosUrl)
      .then(res => res.json())
      .then((json) => {
        this.setState({
          photos: json,
          photosSize: this.calcSize(json),
          showPhotoList: true
        });
      });
  }

  /*
  count the size of object, based on it's non-inherited properties
  */
  calcSize(obj) {
    let key, size = 0;
    for(key in obj) {
      if(obj.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  }

  render() {
    return(
      <div className="app">
        <PageHeader />
        {/*this.state.showPhotoList ? <PhotoList photos={this.state.photos} photosSize={this.state.photosSize} pageNumber="30" photosPerPage="100" /> : null*/}
        <Route path={"/page:id(\\d+)"} render={({ match }) => { return(
          this.state.showPhotoList ?
          <PhotoList photos={this.state.photos} photosSize={this.state.photosSize} pageNumber={match.params.id} photosPerPage="100" />
          : <div>hi</div>
          )}}
        />
      </div>
    );
  }
}

export default withRouter(App);

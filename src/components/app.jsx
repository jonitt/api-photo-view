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
      photos: [0, 0],
      showPhotoList: false
    }
  }

  fetchPhotos() {
    fetch(this.photosUrl)
      .then(res => res.json())
      .then((json) => {
        this.setState({
          photos: json,
          showPhotoList: true
        });
        console.log(json);

      });
  }

  render() {
    return(
      <HashRouter>
        <div className="app">
          <PageHeader />
          {this.state.showPhotoList ? <PhotoList photos={this.state.photos} /> : null}
          <CustomRouter />
        </div>
      </HashRouter>
    );
  }
}

export default App;

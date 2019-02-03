// @Author: Joni Tuhkanen
import React, { Component } from "react";
import App from "./app.jsx";

/*
  This is the main component. In charge of the shown components and some routing
*/
class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.photosUrl = "http://jsonplaceholder.typicode.com/photos";

    this.fetchPhotos();

    this.photosPerPage = 100;

    this.state = {
      photos: [],
      photosSize: 0,
      showPhotoList: false,
      pageNumber: 1
    };
  }

  fetchPhotos() {
    fetch(this.photosUrl)
      .then(res => res.json())
      .then(json => {
        this.setState({
          photos: json,
          photosSize: json.length,
          showPhotoList: true
        });
      });
  }

  setPageNumber(num) {
    this.setState({
      pageNumber: num
    });
  }

  render() {
    return (
      <App
        pageNumber="1"
        photos={this.state.photos}
        showPhotoList={this.state.showPhotoList}
        handleRedirect={url => this.redirectTo(url)}
        photosSize={this.state.photosSize}
        photosPerPage={this.photosPerPage}
      />
    );
  }
}

export default AppContainer;

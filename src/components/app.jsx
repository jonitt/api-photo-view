import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
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
      photoList: null
    }
  }

  fetchPhotos() {
    fetch(this.photosUrl)
      .then(res => res.json())
      .then((json) => {
        this.setState({
          photos: json,
          photoList: <PhotoList photos={json} />
        });
        console.log(json);

      });
  }

  render() {
    return(
      <BrowserRouter>
        <div className="app">
          <PageHeader />
          {this.state.photoList}
          <CustomRouter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

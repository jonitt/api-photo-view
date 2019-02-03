// @Author: Joni Tuhkanen
import React, { Component } from "react";
import PageHeader from "../page_header/page_header.jsx";
import PhotoRouterContainer from "../photo_router/photo_router_container.jsx";
import Style from "./style.scss";

/*
  This is the main component. In charge of the shown components and some routing
*/
const App = props => (
  <div className="app">
    <PageHeader />
    <PhotoRouterContainer
      pageNumber={props.pageNumber}
      photos={props.photos}
      showPhotoList={props.showPhotoList}
      handleRedirect={url => props.redirectTo(url)}
      photosSize={props.photosSize}
      photosPerPage={props.photosPerPage}
    />
  </div>
);

export default App;

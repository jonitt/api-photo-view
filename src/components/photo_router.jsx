import React from "react";
import { withRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import PhotoListContainer from "./photo_list_container.jsx";

const PhotoRouter = props => (
  <Switch>
    <Route
      path={"/page:id(\\d+)"}
      render={({ match }) => {
        return props.showPhotoList ? (
          <PhotoListContainer
            handleRedirect={url => props.redirectTo(url)}
            photos={props.photos}
            photosSize={props.photosSize}
            pageNumber={match.params.id}
            photosPerPage={props.photosPerPage}
          />
        ) : null;
      }}
    />
    <Redirect from="/" to="/page1" />
  </Switch>
);

export default withRouter(PhotoRouter);

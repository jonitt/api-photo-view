import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';


class CustomRouter extends React.Component {

  render() {
    return(
      <Route path={"/page:id(\\d+)"} render={({ match }) => { return(
        <PhotoList photos={this.props.photos} photosSize={this.props.photosSize} pageNumber={match.params.id} photosPerPage="100" />
        )}}
      />
    );
  }
}

export default withRouter(CustomRouter);

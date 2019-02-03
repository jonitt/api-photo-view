import React from "react";
import { withRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import PhotoList from "./photo_list.jsx";

class PhotoRouter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPhotoList: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.showPhotoList != this.props.showPhotoList) {
      this.setState({
        showPhotoList: this.props.showPhotoList
      });
    }
  }

  render() {
    return (
      <Switch>
        <Route
          path={"/page:id(\\d+)"}
          render={({ match }) => {
            return this.state.showPhotoList ? (
              <PhotoList
                handleRedirect={url => this.props.redirectTo(url)}
                photos={this.props.photos}
                photosSize={this.props.photosSize}
                pageNumber={match.params.id}
                photosPerPage={this.props.photosPerPage}
              />
            ) : null;
          }}
        />
        <Redirect from="/" to="/page1" />
      </Switch>
    );
  }
}

export default withRouter(PhotoRouter);

import React from "react";

/*
  @props:
    handleOutOfFocus = handle out of focus
    photoUrl: src of photo
*/
class FullSizePhoto extends React.Component {
  constructor(props) {
    super(props);

    this.handleOutOfFocus = this.handleOutOfFocus.bind(this);
  }

  handleOutOfFocus(e) {
    //if user clicked inside element, do nothing
    if(this.node.contains(e.target)) {
      return;
    }

    this.props.handleOutOfFocus();
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleOutOfFocus, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutOfFocus, false);
  }

  render() {
    return(
      <div className="grey_shade_background">
        <img ref={node => this.node = node} src={this.props.photoUrl} className="full_size_photo"></img>
      </div>
    );
  }
}

export default FullSizePhoto;

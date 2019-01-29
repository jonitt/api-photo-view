import React from "react";
import { Link } from "react-router-dom";

class PageHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return(
      <div className="page_header">
        <div><Link to="/pic1">Testilinkki</Link></div>
      </div>
    );
  }
}

export default PageHeader;

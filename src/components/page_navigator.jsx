import React from "react";
import Pagination from "react-js-pagination";

class PageNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Pagination onChange={(pageNum) => {
        this.redirectTo("/page" + pageNum);
      }} activePage={this.props.pageNumber} itemsCountPerPage={this.props.photosPerPage} totalItemsCount={this.props.photosSize} pageRangeDisplayed={5} itemClass="photo_list_pagination_entry"
      />
    );
  }
}

export default PageNavigation;

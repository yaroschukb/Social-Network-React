import React from "react";
import { connect } from "react-redux";
import { setNews, getNewsThunkCreator,toggleIsFetching } from "../../Redux/newsPageReducer.js"
import News from "./News";
import Preloader from '../common/Preloader/Preloader'

class NewsContainer extends React.Component {

  componentDidMount() {
    let {currentPage, pageSize} = this.props;
    this.props.getNews(currentPage, pageSize);
  }

  onPageChanged = pageNumber => {
    let {pageSize} = this.props;
    this.props.getNews(pageNumber, pageSize);
  };

  render() {
    return (
        <React.Fragment>
        {this.props.isFetching ? <Preloader /> : null}
          <News news={this.props.news}
                totalItemsCount={this.props.totalNewsCount}
                pageSize={this.props.pageSize}
                pagesCount={this.props.pagesCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
                />
        </React.Fragment>);
  }
}

let mapStateToProps = (store) => {
  return {
    news: store.newsPage.news,
    totalNewsCount: store.newsPage.totalNewsCount,
	  pageSize: store.newsPage.pageSize,
	  currentPage: store.newsPage.currentPage,
    isFetching: store.newsPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  setNews: setNews,
  getNews: getNewsThunkCreator,
  toggleIsFetching,
})(NewsContainer);

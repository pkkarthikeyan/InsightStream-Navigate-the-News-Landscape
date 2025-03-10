import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "../Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps ={
        country : "in",
        pageSize: 12,
        category : "general"

    }
    static propTypes={
        country : PropTypes.string,
        pageSize: PropTypes.number,
        category : PropTypes.string

    }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    console.log("mount");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false

    });
  }

  prev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,

      articles: parsedData.articles,
      loading: false
    });
  };
  next = async () => {
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    });
  }
  capitalizedFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  render() {
    return (
      <div className="container-sm my-3 ">
        <h2 className="text-center">NewsMonkey - Top {this.props.category ==="general"?"":this.capitalizedFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading  &&<Spinner/>}
        <div className="row">
           
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-3 " key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 90) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author ={element.author} date={element.publishedAt}
                  source= {element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.prev}
          >
            &larr;Previous
          </button>
          <span className="px-2 py-1 border rounded bg-light text-dark">
            Page {this.state.page}
          </span>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)}
            type="button"
            className="btn btn-primary"
            onClick={this.next}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

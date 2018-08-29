
import React, { Component } from 'react';
import { connect } from 'react-redux'
import News from '../News/index';
import { fetchArticle } from '../../actions/article'

class LatestNews extends Component {

  componentWillMount() {
    this.props.fetchArticle()
  }

  render() {
    console.log("hello im here", this.props.article)
    return (
      <section id="news">
        <div className="container">
          <h1>Latest from the Loop</h1>
          <div className="row">
            <div className="col m4">
              {this.props.article && (
                <News id={this.props.article.id}
                content={this.props.article.content}
                comment={this.props.article.comment}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
function mapStateToProps(state) {
  return {
    article: state.articles.article
  }
}
export default connect(mapStateToProps, { fetchArticle })(LatestNews);


import React ,{Component}from 'react';
import { connect } from 'react-redux'
import News from '../News/index';
import {fetchArticle} from '../../actions/article'

class LatestNews extends Component {

  componentWillMount(){
    this.props.fetchArticle()
  }

  render() {
    return (
      <section id="news">
        <div className="container">
          <h1>Latest from the Loop</h1>
          <div className="row">
            <div className="col m4">
              <News />
            </div>
            <div className="col m4">
              <News />
            </div>
            <div className="col m4">
              <News />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
function mapStateToProps(state){
  return{ article : state.articles.article
  }
  }
export default connect(mapStateToProps,{fetchArticle})(LatestNews);

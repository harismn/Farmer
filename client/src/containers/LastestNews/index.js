
import React from 'react';
import News from '../News/index';

const LatestNews = () => {
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
};

export default LatestNews;

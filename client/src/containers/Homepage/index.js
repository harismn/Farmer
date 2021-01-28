import React, { Component } from 'react';
import styled from 'styled-components'
import Header from '../../components/Header/index';
import Landing from '../../components/Main/index';
import Footer from '../../components/Footer/index';
import News from '../../containers/LastestNews/index'

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;


class Homepage extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Landing />
        <News />
        <Footer />
      </AppWrapper>
    );
  }
}

export default Homepage;

import React from 'react'

import { Navbar, Pivot, Sidebar, SponsorSocial, TitleCard } from './components';
import { AboutMe, Footer, News, Partners } from './containers';

import './App.css';

const App = () => (
    <div className="App">
    <Pivot />
      <div className='gradient__bg'>
        <div className='page_wrapper'>
          <Navbar />
          <TitleCard />
          <Sidebar />
          <SponsorSocial />
        </div>
        <AboutMe />
        <News />
        <Partners />
        <Footer />
      </div>
    </div>
  );

export default App;
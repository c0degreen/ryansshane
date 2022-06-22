import React from 'react'

import { Navbar, Sidebar, TitleCard } from './components';
import { AboutMe, Footer, News } from './containers';

import './App.css';

const App = () => (
    <div className="App">
      <div className='pivot'>
        <TitleCard />
      </div>
      <div className='gradient__bg'>
        <div className='page_wrapper'>
          <Navbar />
        </div>
        <AboutMe />
        <News />
        <Footer />
      </div>
    </div>
  );

export default App;
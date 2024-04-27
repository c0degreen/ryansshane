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
        <Footer />
      </div>
    </div>
  );

export default App;
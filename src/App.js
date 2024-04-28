import React from 'react'

import { Content, TitleCard } from './components';
import { Footer } from './containers';

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
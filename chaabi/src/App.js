import React from 'react';
import './App.css';
import SideBar from '../src/component/sidebar/sidebar';
import Header from '../src/component/header/header';
import Content from '../src/component/content/content';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;

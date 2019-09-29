import React from 'react';
import './App.css';
import Gallery from './container/GalleryPage/GalleryPage';
import {connect} from 'react-redux';

const App: React.FC = () => {
  return (
    <Gallery/>
  );
}

export default App;

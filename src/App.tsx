import React from 'react';
import logo from './logo.svg';
import './App.css';
import  LayoutContainer  from "./shared/component/layout/LayoutContainer";
import HomeContainer from './page/home/home-container';

function App() {
  return (
   <LayoutContainer>
    <HomeContainer />
   </LayoutContainer>
  );
}

export default App;

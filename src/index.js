import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Shop from './components/Shop';
import './styles.css';

import HeaderData from './staticData/Header';
import ShopData from './staticData/Shop';

const Index = () => (
  <div className="font-sans bg-eggWhite text-zeus box-border min-h-screen">
    <div className="container">
      <Header menuItems={HeaderData} />
      <Shop shopData={ShopData} />
    </div>
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));

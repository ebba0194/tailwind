import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const menuItems = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Shop',
    link: '/',
  },
  {
    label: 'Blog',
    link: '/',
  },
  {
    label: 'Contact',
    link: '/',
  },
];

const Index = () => (
  <div className="font-sans bg-eggWhite text-zeus box-border min-h-screen">
    <div className="container">
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-3 h-32">
          <div className="flex items-center justify-start">
            <svg className="w-60" id="logoipsum" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.778 100"><path d="M31.941,62.825h25.65V37.175H31.941ZM52.654,47.532h-5.42v-5.42h5.42Zm-15.777-5.42H42.3V52.468H52.654v5.42H36.877Zm37.417-4.937A12.825,12.825,0,1,0,87.119,50,12.84,12.84,0,0,0,74.294,37.175Zm0,20.713A7.888,7.888,0,1,1,82.182,50,7.9,7.9,0,0,1,74.294,57.888Zm58.719-20.713A12.825,12.825,0,1,0,145.837,50,12.84,12.84,0,0,0,133.013,37.175Zm0,20.713A7.888,7.888,0,1,1,140.9,50,7.9,7.9,0,0,1,133.013,57.888Zm-29.36-20.713A12.825,12.825,0,1,0,116.478,50,12.84,12.84,0,0,0,103.653,37.175Zm0,20.713a7.888,7.888,0,1,1,7.488-10.356h-7.488v4.936h7.488A7.9,7.9,0,0,1,103.653,57.888Z" fill="#394149" /></svg>
          </div>
          <ul className="flex items-center justify-center">
            {menuItems.map(({ label, link }, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${label}-${i}`} className="px-3.5 font-bold text-xl hover:text-crusta focus-within:text-crusta transition duration-150 ease-in-out">
                <a href={link}>{label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end text-3xl">
            <a href="/" className="rounded-full bg-barleyWhite w-16 h-16 border-2 border-varden flex items-center justify-center transform scale-100 hover:scale-110 transition duration-150 ease-in-out">
              <i className="fas fa-shopping-bag" />
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-1">
          <div className="bg-lightningYellow h-96 shadow-lg my-16 rounded-lg" />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));

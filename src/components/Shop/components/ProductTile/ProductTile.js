import React from 'react';
import {
  objectOf,
  string,
} from 'prop-types';

const ProductTile = ({
  product: {
    thumbnail,
    link,
    title,
  },
}) => (
  <div className="grid grid-row-4 m-8 rounded-lg p-8 shadow-lg radial-bg border-2 border-soapStone">
    <div className="grid grid-cols-1">
      <div className="flex items-center justify-end text-lg">
        <a href="/" className="rounded-full w-12 h-12 border border-zeus border-opacity-10 flex items-center justify-center hover:text-soapStone hover:bg-zeus transition duration-150 ease-in-out">
          <i className="fas fa-shopping-bag" />
        </a>
      </div>
    </div>
    <div className="grid grid-cols-1">
      <img alt={`${title}-thumbail`} src={thumbnail} className="w-100 px-8" />
    </div>
    <div className="grid grid-cols-1 text-center items-end text-lg text-gigas font-bold pt-8">
      <a href={link} className="transition duration-150 ease-in-out w-max justify-self-center border-b-2 border-gigas border-opacity-0 hover:border-opacity-75">{title}</a>
    </div>
    <div className="grid grid-cols-1 text-center text-waterloo py-4">
      $236.00
    </div>
  </div>
);

ProductTile.propTypes = {
  product: objectOf({
    thumbnail: string,
    link: string,
    title: string,
    id: string,
  }),
};

ProductTile.defaultProps = {
  product: {},
};

export default ProductTile;

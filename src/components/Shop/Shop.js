import React, { Fragment } from 'react';
import {
  arrayOf,
  objectOf,
  string,
  number,
} from 'prop-types';
import ProductTile from './components/ProductTile';

const Shop = ({
  shopData: {
    title,
    resultCount,
    sortOptions,
    breadcrumbs,
    products,
  },
}) => (
  <div className="grid grid-row-auto">
    <div className="grid grid-cols-1">
      <div className="bg-gradient-to-r from-lightningYellow via-treePoppy to-goldenTainoi h-96 shadow-lg my-8 rounded-lg p-8 pt-16">
        <div className="grid grid-cols-3 items-center">
          <div className="font-bold">
            {breadcrumbs.map(({ link, label }, i) => (
              <Fragment key={`${link}-${label}`}>
                {i > 0 && (<span>/</span>)}
                <a href={link} className={`${i === 0 && 'text-eggWhite'} p-2 hover:text-eggWhite`}>
                  {label}
                </a>
              </Fragment>
            ))}
          </div>
          <div className="text-center text-4xl font-bold">{title}</div>
          <div className="flex justify-end items-center">
            <span className="px-8 font-bold">
              Showing
              {' '}
              {resultCount.start}
              -
              {resultCount.end}
              {' '}
              of
              {' '}
              {resultCount.total}
            </span>
            <span>
              <select className="rounded p-3 bg-opacity-50 font-bold bg-eggWhite shadow-sm">
                {sortOptions.map(({ label, value }) => (
                  <option value={value}>{label}</option>
                ))}
              </select>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 -mt-80">
      {products.map((product) => (
        <Fragment key={product.id}>
          <ProductTile product={product} />
        </Fragment>
      ))}
    </div>
  </div>
);

Shop.propTypes = {
  shopData: objectOf({
    title: string,
    resultCount: objectOf({
      start: number,
      end: number,
      total: number,
    }),
    sortOptions: arrayOf(
      objectOf({
        label: string,
        value: string,
      }),
    ),
    breadcrumbs: arrayOf(
      objectOf({
        link: string,
        label: string,
      }),
    ),
    products: arrayOf(
      objectOf({
        thumbnail: string,
        link: string,
        title: string,
        id: string,
      }),
    ),
  }),
};

Shop.defaultProps = {
  shopData: {},
};

export default Shop;

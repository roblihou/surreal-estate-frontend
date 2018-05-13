import React from 'react';
import Sidebar from './Sidebar';
import Property from './Property';
import listings from '../data/listings.json';
import './listings.scss';

const Listings = () => listings.map(listing => <Property {...listing} />);

const PropertyListings = () => (
  <React.Fragment>
    <div className="listings-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="listings">
        <Listings />
      </div>


    </div>
    <nav className="pagination-container" aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </React.Fragment>
);

export default PropertyListings;

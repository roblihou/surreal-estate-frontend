import React from 'react';

const Sidebar = props => (
  <nav className="bg-secondary sidebar">
    <ul className="nav nav-pills flex-column">

      <li className="nav-item">
        <a className="nav-link" href="#">Sort by:</a>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>Price Ascending</option>
          <option>Price Descending</option>
        </select>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Filter by City:</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => props.onCityClick('Manchester')}>Manchester</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => props.onCityClick('Liverpool')}>Liverpool</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => props.onCityClick('Sheffield')}>Sheffield</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => props.onCityClick('Leeds')}>Leeds</a>
      </li>
    </ul>
  </nav>
);

export default Sidebar;

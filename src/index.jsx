import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import NavigationBar from './components/NavBar';
import PropertyListings from './components/PropertyListings';
import './styles.scss';

render(<React.Fragment><NavigationBar /><PropertyListings /></React.Fragment>, document.getElementById('root'));

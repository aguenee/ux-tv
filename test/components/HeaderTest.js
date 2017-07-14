import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';
import { NavLink } from 'react-router-dom';

import Header from '../../src/components/Header';

describe('components/Header', () => {

	it('renders component', () => {
		let shallowRenderer = new ShallowRenderer();
		shallowRenderer.render(<Header brand="My super brand" />);
		let headerInstance = shallowRenderer.getRenderOutput();

		let expectedElement = (
         <header>
            <nav className="navbar navbar-default">
               <div className="container-fluid">
                  <div className="navbar-header">
                     <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                     </button>
                     <NavLink to='/home' className="navbar-brand">My super brand</NavLink>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                     <ul className="nav navbar-nav navbar-right">
                        <li>
                           <NavLink to='/home' activeStyle={{ backgroundColor: '#e7e7e7' }}>Tous les films</NavLink>
                        </li>
                        <li>
                           <NavLink to='/my-favorite-movies' activeStyle={{ backgroundColor: '#e7e7e7' }}>Favoris</NavLink>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </header>
		);
		expect(headerInstance).toEqual(expectedElement);
	});

});
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';

import MovieList from '../../src/components/MovieList';
import MovieData from '../../src/data/MovieData';
//import FavoriteButton from '../src/components/FavoriteButton';


describe('components/MovieList', () => {

   it('renders component', () => {
   		let shallowRenderer = new ShallowRenderer();
		shallowRenderer.render(<MovieList movies={MovieData} />);
		let movieListInstance = shallowRenderer.getRenderOutput()
		expect(movieListInstance).toExist();
   	});

  	/*it('toggles its class on click event', () => {
		let FavoriteButtonInstance = ReactTestUtils.renderIntoDocument(
			<FavoriteButton active={false} />
		);
		let buttonElement = ReactTestUtils.findRenderedDOMComponentWithClass(FavoriteButtonInstance, 'btn');
		let toggledClass = buttonElement.className.indexOf('btn-default') !== -1 ? 'btn-danger' : 'btn-default';

		ReactTestUtils.Simulate.click(buttonElement);

		//expect(buttonElement.className.match(/\bbtn btn-danger\b/)).toExist();
		expect(buttonElement.className).toEqual('btn ' + toggledClass);
   });*/

});
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';

import MovieList from '../../src/components/MovieList';
import Movie from '../../src/components/Movie';
import MovieData from '../../src/data/MovieData';


describe('components/MovieList', () => {

	it('renders component', () => {
   		let shallowRenderer = new ShallowRenderer();
		shallowRenderer.render(<MovieList movies={MovieData} />);
		let movieListInstance = shallowRenderer.getRenderOutput()
		expect(movieListInstance).toExist();
   	});

	it('lists the right number of movies', () => {
		let MovieListInstance = ReactTestUtils.renderIntoDocument(
			<MovieList movies={MovieData} />
		);

		let movieElements = ReactTestUtils.scryRenderedComponentsWithType(MovieListInstance, Movie);

		expect(movieElements).toBeAn('array');
		expect(movieElements.length).toBe(MovieListInstance.props.movies.length);
	});
	
});
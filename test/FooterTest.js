import React from 'react'; 
import expect from 'expect';
import { createRenderer } from 'react-dom/test-utils';

import Footer from '../src/components/Footer';

describe('components/Footer', () => {
	it('works', () => {
		let renderer = createRenderer();
		renderer.render(<Footer brand="My super brand" year={2017} />);
		let actualElement = renderer.getRenderOutput();
		let expectedElement = (
         <footer className="footer">
            <div className="container-fluid">
              <p className="text-muted text-center">© My super brand - 2017</p>
            </div>
         </footer>
		);
		expect(actualElement).toEqual(expectedElement);
	});
});
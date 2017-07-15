import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';

import Footer from '../../src/components/Footer';

describe('components/Footer', () => {

	it('renders component', () => {
		let shallowRenderer = new ShallowRenderer();
		shallowRenderer.render(<Footer brand="My super brand" year={2017} />);
		let FooterInstance = shallowRenderer.getRenderOutput();
		
		let expectedElement = (
         <footer className="footer">
            <div className="container-fluid">
              <p className="text-muted text-center">© My super brand - 2017</p>
            </div>
         </footer>
		);
		expect(FooterInstance).toEqual(expectedElement);
	});

});
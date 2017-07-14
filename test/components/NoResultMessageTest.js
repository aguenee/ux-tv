import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';

import NoResultMessage from '../../src/components/NoResultMessage';


describe('components/NoResultMessage', () => {

   it('renders component', () => {
   		let messageTest = "My test message";

		let shallowRenderer = new ShallowRenderer();
		shallowRenderer.render(<NoResultMessage message={messageTest} />);
		let noResultMessageInstance = shallowRenderer.getRenderOutput();
		let expectedElement = (
			<div className="alert alert-info" role="alert">
				My test message
			</div>
		);
		expect(noResultMessageInstance).toEqual(expectedElement);
   });

});
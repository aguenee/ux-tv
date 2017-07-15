import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';

import FavoriteButton from '../../src/components/FavoriteButton';

describe('components/FavoriteButton', () => {

   it('renders component', () => {
      let shallowRenderer = new ShallowRenderer();
      shallowRenderer.render(<FavoriteButton active={true} />);
      let FavoriteButtonInstance = shallowRenderer.getRenderOutput();
      let onclick = FavoriteButtonInstance.props.onClick;

      let expectedElement = (
         <button className="btn btn-danger" role="button" onClick={onclick}>
            <span className="glyphicon glyphicon-heart"></span>
         </button>
      );
      expect(FavoriteButtonInstance).toEqual(expectedElement);
   });

   it('calls handleClick function on click event', (done) => {
      let handleClickTest = () => {
         done();
      };

      let FavoriteButtonInstance = ReactTestUtils.renderIntoDocument(
         <FavoriteButton active={false} onClick={handleClickTest} />
      );
      let buttonElement = ReactTestUtils.findRenderedDOMComponentWithClass(FavoriteButtonInstance, 'btn');
      
      ReactTestUtils.Simulate.click(buttonElement);
   });

   it('toggles active state on click event', () => {
      let FavoriteButtonInstance = ReactTestUtils.renderIntoDocument(
         <FavoriteButton active={false} />
      );
      let buttonElement = ReactTestUtils.findRenderedDOMComponentWithClass(FavoriteButtonInstance, 'btn');
      let activeValue = !FavoriteButtonInstance.state.active;

      ReactTestUtils.Simulate.click(buttonElement);
      expect(FavoriteButtonInstance.state.active).toEqual(activeValue);
   });

   it('toggles className on click event', () => {
      let FavoriteButtonInstance = ReactTestUtils.renderIntoDocument(
         <FavoriteButton active={false} />
      );
      let buttonElement = ReactTestUtils.findRenderedDOMComponentWithClass(FavoriteButtonInstance, 'btn');
      let toggledClass = buttonElement.className.indexOf('btn-default') !== -1 ? 'btn-danger' : 'btn-default';

      ReactTestUtils.Simulate.click(buttonElement);
      expect(buttonElement.className).toEqual('btn ' + toggledClass);
   });

});
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

});
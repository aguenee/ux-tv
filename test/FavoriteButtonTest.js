import React from 'react'; 
import expect from 'expect';
import { createRenderer } from 'react-dom/test-utils';

import FavoriteButton from '../src/components/FavoriteButton';

describe('components/FavoriteButton', () => {
   it('works', () => {
      let renderer = createRenderer();
      renderer.render(<FavoriteButton active={true} />);
      let actualElement = renderer.getRenderOutput();
      let expectedElement = (
         <button className="btn btn-danger" role="button" onClick={this.props.onClick}>
            <span className="glyphicon glyphicon-heart"></span>
         </button>
      );
      expect(actualElement).toEqual(expectedElement);
   });
});
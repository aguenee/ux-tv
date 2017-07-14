import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';

import Movie from '../../src/components/Movie';
import FavoriteButton from '../../src/components/FavoriteButton';


describe('components/Movie', () => {

   it('renders component', () => {
      let infoTest = {
         title: "Title",
         image: "",
         director: "Director",
         synopsis: "..."
      };

      let shallowRenderer = new ShallowRenderer();
      shallowRenderer.render(<Movie liked={true} info={infoTest} />);
      let movieInstance = shallowRenderer.getRenderOutput()
      expect(movieInstance).toExist();
   });

});
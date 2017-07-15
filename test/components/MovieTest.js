import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';

import Movie from '../../src/components/Movie';
import FavoriteButton from '../../src/components/FavoriteButton';


describe('components/Movie', () => {

   var infoTest = {
      title: "Title",
      image: "",
      director: "Director",
      synopsis: "..."
   };

   it('renders component', () => {
      let shallowRenderer = new ShallowRenderer();
      shallowRenderer.render(<Movie liked={true} info={infoTest} />);
      let MovieInstance = shallowRenderer.getRenderOutput()
      expect(MovieInstance).toExist();
   });

   it('calls handleChange function on button click event', (done) => {
      let handleChangeTest = (linkedValueTest) => {
         expect(linkedValueTest).toEqual(true);
         done();
      };

      let MovieInstance = ReactTestUtils.renderIntoDocument(
         <Movie liked={false} info={infoTest} onChange={handleChangeTest(true)} />
      );
      let favoriteButtonElement = ReactTestUtils.findRenderedComponentWithType(MovieInstance, FavoriteButton);
      
      ReactTestUtils.Simulate.click(favoriteButtonElement);
   });

   it('toggles liked state on button click event', (done) => {
      let handleChangeTest = (linkedValueTest) => {
         expect(linkedValueTest).toEqual(true);
         done();
      };

      let MovieInstance = ReactTestUtils.renderIntoDocument(
         <Movie liked={false} info={infoTest} onChange={handleChangeTest(true)} />
      );

      let favoriteButtonElement = ReactTestUtils.findRenderedComponentWithType(MovieInstance, FavoriteButton);
      let likedValue = !favoriteButtonElement.state.active;

      ReactTestUtils.Simulate.click(favoriteButtonElement);
      expect(MovieInstance.state.liked).toEqual(likedValue);
   });

});
import React from 'react'; 
import expect from 'expect';
import { createRenderer } from 'react-dom/test-utils';

import Movie from '../src/components/Movie';
import FavoriteButton from '../src/components/FavoriteButton';

describe('components/Movie', () => {
   it('works', () => {
      let info = {
         title: "Title",
         image: "",
         director: "Director",
         synopsis: "..."
      };
      let renderer = createRenderer();
      renderer.render(<Movie liked={true} info={info} />);
      let actualElement = renderer.getRenderOutput();
      let expectedElement = (
         <div className="col-sm-4 col-md-4">
            <div className="thumbnail">
               <img alt="Title" src="" />
               <div className="caption">
                  <h3>Title</h3>
                  <h5>Director</h5>
                  <p>...</p>
                  <p>
                     <FavoriteButton active={true} onClick={this.props.onChange} />
                  </p>
               </div>
            </div>
         </div>
      );
      expect(actualElement).toEqual(expectedElement);
   });
});
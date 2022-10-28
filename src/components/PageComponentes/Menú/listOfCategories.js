import 'regenerator-runtime/runtime';
import React from 'react';
import { Category } from './categories';

export class ListOfCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: props.categories,
    };
  }

  render() {
    var categories = this.state.categories || [];

    return (
      <div className='d-flex flex-row'>
          {
            categories.map((x, i) => (
              <div className='col col-sm' key={i}>
                <Category image={x.image} {...x}></Category>
              </div>
              )
            )
          }
      </div>
    );
  }
}

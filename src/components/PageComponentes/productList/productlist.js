import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { ListOfProducts } from ".";

var listProducts = (
  [

    ]
);


class ListProductsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: '',
      text: props.text,
      text2: props.text2,
      type: props.type
    };
  }

  render(){
    return(
      <div className="d-flex" fluid>
        <ListOfProducts products={listProducts} type={this.state.type} text={this.state.text} text2={this.state.text2}></ListOfProducts>
      </div>
    );
  }
}




export default ListProductsComponent;

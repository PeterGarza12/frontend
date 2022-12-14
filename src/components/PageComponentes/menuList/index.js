import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { Product } from '../productCard';
import { ListContainer, CatTitle, CardContainer } from './styles';
import Store from '../../../utils/store';
import { Col } from 'reactstrap';

export class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
    };
  }



  async componentDidMount() {
    const id = window.location.href.split('/')[4]
    try {
      new Store().getCatProducts(id,{
        callback: async (response) => {
          console.log('response', response);
            this.setState({
              products: response.data,
            });
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    var products = this.state.products || [];
    return (
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <CatTitle className='d-flex flex-row justify-content-center justify-content-lg-start col-12 col-lg-10'>
            Menú
        </CatTitle>
        <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-center align-items-center col-12 col-lg-10" fluid>
        <ListContainer className='d-flex flex-column flex-lg-row flex-wrap justify-content-center col-12'>
        {products.map((x, i) => (
          <CardContainer key={i}>
            <Product image={x.image} {...x}></Product>
          </CardContainer>
          ))}
        </ListContainer>
        </div>


      </div>

    );
  }
}

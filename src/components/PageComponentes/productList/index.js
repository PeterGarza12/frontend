import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Product } from '../productCard';
import { DetailCont, ImgContainer, ListContainer, ListImg, ListTitle, ListTitleBottom, ProductLister, TitleContainer } from './styles';
import listimg from "../../../res/hero.png"
import Store from '../../../utils/store';
import store2 from 'store2';

export class ListOfProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      text: props.text,
      text2: props.text2,
      type: props.type
    };
  }

  async componentDidMount() {
    var userid = store2.get('USERID');
    try {
      if(this.state.type===0){

        //Get de productos populares

      } else if (this.state.type===1){
        new Store().GetSugg(userid, (respuesta)=>{
          new Store().getCatProducts(respuesta.data.idCategory,{
            callback: async (response) => {
                this.setState({
                  products: response.data,
                });
            },
          });
        })

      }
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    var products = this.state.products;
    var text = this.state.text || [];
    var text2 = this.state.text2 || [];

    return (
      <ListContainer className='d-flex flex-column flex-lg-row col-12'>
        <DetailCont className='col-12 col-lg-2 align-items-center align-items-lg-start' fluid>
          <TitleContainer className='d-flex flex-column justify-content-start align-items-start'>
            <ListTitle >{text}</ListTitle>
            <ListTitleBottom >{text2}</ListTitleBottom>
          </TitleContainer>
          <ImgContainer className="d-none d-lg-flex">
            <ListImg src={listimg} width={300} height={300}></ListImg>

          </ImgContainer>
        </DetailCont>


        <ProductLister className="ELPEPE">
          {products.map((x, i) => (
            i<4 ? (            <Col md="3" key={i}>
            <Product image={x.image} {...x}></Product>
          </Col>) : (<Col></Col>)

          ))}


        </ProductLister>
      </ListContainer>
    );
  }
}

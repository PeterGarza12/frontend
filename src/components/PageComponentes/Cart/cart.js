import React from "react";
import { TitleCart, TotalSection } from "./styles";
import { ListOfCart } from "./listOfCart";
import Store from '../../../utils/store';
import store2 from 'store2';
import {StyledForm, StyledLabel, StyledInput, StyledButton } from '../../Forms/Reports/styles';
import store from "store2";
import { useNavigate } from "react-router-dom";

import {
  ContainerCart,
  TotalCart,
  PayCartBtn
} from "./styles";

class CartC extends React.Component {
  constructor() {
    super();

    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var out = year + '-' + month + '-' + day;

    var year2 = year+5;
    var out2 = year2 + '-' + month + '-' + day;

    console.log(out);
    this.state = {
      products: null,
      total: 0,
      productList: null,
      card: '',
      date: out,
      maxDate: out2,
      cvv: ''
    };
  }

  async componentDidMount() {
    var userid = store2.get('USERID');
    var productos = [];
    var pretotal = 0;
    try {
      new Store().GetCart(userid, {
        callback: async (response) => {
          this.setState({
            products : response.data.products
          }, (respuesta)=>{

            this.state.products.forEach(element => {
              new Store().getProduct(element.id, {callback: (respuesta)=>{

                respuesta.data["amount"]=element.amount;
                pretotal+=respuesta.data["price"]*element.amount;

                productos.push(respuesta.data);
                this.setState({
                  productList: productos,
                  total: pretotal
                });
              }});

            });

            // productos.forEach(function(itm){
            //   itm.amount = 1;
            //  });

            //const capital = productos.map(i => { i.amount = 5; return i; })
          });

        },
      });


    } catch (error) {
      console.log(error);
    }
  }

  dates = new Date();

  handleCardChange = (e) => {
    const { value } = e.target
    this.setState({ card: value })
  }

  handleDateChange = (e) => {
    const { value } = e.target
    this.setState({ date: value })
  }

  handleCVVChange = (e) => {
    const { value } = e.target
    this.setState({ cvv: value })
  }

  handleFormPay = (e) => {
    var bandera = true;
    var aviso="Los siguientes datos son inválidos: ";
    // let nav = useNavigate();

    e.preventDefault();
    let cardRegex = new RegExp(/(^[\d]{16}$)/);
    let cvvRegex = new RegExp(/(^[\d]{3}$)/);

      if(this.state.card.match(cardRegex)===null)
      {
        bandera=false;
        aviso+="\nNúmero de tarjeta: Ingrese 16 dígitos";
      }
      if(this.state.cvv.match(cvvRegex)===null)
      {
        bandera=false;
        aviso+="\nNúmero de CVV: Ingrese 3 dígitos";
      }
      if(bandera===true){
        var userid = store2.get('USERID');
        var email = store2.get('EMAIL');
        const store = new Store();
        store.AddSale(userid, email, this.state.productList, this.state.total,this.state.date, (response) => {

          store.CleanCart(userid, (respuesta)=>{
            window.location.replace("/");
          });

          console.log(response);
        });

      } else {
        alert(aviso);
        return;
      }



    //this.props.onSearchReport(this.state.initDate);
  }

  render(){
    var products = this.state.productList || [];
    var total = this.state.total || [];

    const { date } = this.state
    const { maxDate } = this.state


    return(
      <ContainerCart className="Aquí está lo del carrito col-10">

        <TitleCart>CARRITO</TitleCart>

        <div className="d-flex flex-column-reverse flex-md-row">

          <div className="d-flex flex-column col-12 col-md-8">
            <ListOfCart cart={products}></ListOfCart>
          </div>

          <TotalSection className="d-flex flex-column">
            <TotalCart className="d-flex flex-row">
              <div>total:      $</div>
              <div>{total}</div>
            </TotalCart>

            <StyledForm>
              <StyledLabel>
                Ingresar número de tarjeta
                <StyledInput type="text" placeholder="Número de tarjeta (16 dígitos)" className="col-12" onChange={this.handleCardChange}/>
              </StyledLabel>

              <StyledLabel>
                Ingresar fecha de vencimiento
                <StyledInput type="date" value={date} min={date}  max={maxDate} onChange={this.handleDateChange}/>
              </StyledLabel>

              <StyledLabel>
                Ingresar CVV
                <StyledInput type="text" placeholder="CVV" className="col-2" onChange={this.handleCVVChange}/>
              </StyledLabel>
            </StyledForm>
            <PayCartBtn onClick={this.handleFormPay}>Pagar</PayCartBtn>
          </TotalSection>

        </div>

      </ContainerCart>
    );
  }
}

export default CartC;

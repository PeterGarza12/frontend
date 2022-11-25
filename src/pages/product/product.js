import React, {useEffect, useState} from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";
import { ProductView } from "../../components/PageComponentes/productView";
import Store from '../../utils/store';
import store2 from 'store2';



class Product extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      desc: '',
      price: '',
      image: ''
    }
  }

  async componentDidMount() {
    const id = window.location.href.split('/')[4]
    var userid = store2.get('USERID');
    console.log(id);
    try {
      new Store().getProduct(id, {
        callback: async (response) => {
          this.setState({
            name: response.data.name,
            desc: response.data.description,
            price: response.data.price,
            image: response.data.image,
            category: response.data.idCategory
          }, (respuesta)=>{new Store().UpdateSugg(userid, this.state.category, (respuesta)=>{});});

        },
      });

    } catch (error) {
      console.log(error);
    }
  }



  render() {

    return(

      <View banner= {''} header = {'Header'} theme={MainTheme} >
        <div>
        <ProductView name={this.state.name} description={this.state.desc} price={this.state.price}
        image={this.state.image}></ProductView>

        </div>
      </View>
    );
  }
}
// function Product(){
//   const { id } = useParams();
//  // var product = useRef(null);
//   const [producto, setProduct]=useState();

  // useEffect(() => {
  //   try {
  //     new Store().getProduct(id, {
  //       callback: async (response) => {
  //         //product.current=response.data;
  //         setProduct(response.data);
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // })

  // return(

  //   <View banner= {''} header = {'Header'} theme={MainTheme} >
  //     <div>
  //     <ProductView name={producto.name} description={producto.description} price={producto.price}
  //     image={producto.image}></ProductView>

  //     </div>
  //   </View>
  // );
// }

export default Product;

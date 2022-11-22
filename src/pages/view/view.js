import React, {useEffect} from "react";
import { Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
//import { Content } from "../Content/content";
import { Header } from "../../components/PageComponentes/Header";
import Footer from "../../components/PageComponentes/Footer";
import { MainContainer, RowAfterHeader, RowFooter } from "./styles";
import { pageColors } from "../../utils/colors";
import store2 from 'store2';

const navbaritems = [
  {
    text: 'Inicio',
    link: '/',
  }
];



export const View = (props) => {
  let nav = useNavigate();

  const store = store2.get('TOKEN');
  const id = store2.get('USERID');
  var logeado = false;
  if(id==null){
    logeado=false;
  } else {
    logeado=true;
  }

  // useEffect(() => {
  //   if (id===null && (props.page===null || props.page===undefined)){
  //    nav("/login")
  //   }
  // },[])

  return(
    <MainContainer fluid bgImg = {pageColors[props.theme].bgImg}>
      <Row>
        {
          props.header === 'Header' ? (
            <Header theme={props.theme} items={navbaritems} logged ={logeado}></Header>
          ) : (
            <div></div>
          )
        }
      </Row>

      <RowAfterHeader className="Col after header">
        {
          props.banner === 'Prueba' ? (
            <h3>Aquí iría algún elemento extra como un anuncio o algo así dependiendo en cuál página estemos</h3>
          ) : (
            <div></div>
          )
        }
        <div className='d-flex flex-column align-items-center justify-content-center'>{props.children}</div>
      </RowAfterHeader>

      <RowFooter>
        <Footer></Footer>
      </RowFooter>

    </MainContainer>
  );
};

import React, { useEffect, useState } from "react";
import { View } from "../../view/view";
import { MainTheme } from "../../../utils/colors";
import Table from "../../../components/PageComponentes/Table/table";
import ReportByUserForm from "../../../components/Forms/Reports/byUserForm";
import { useNavigate } from "react-router-dom";
import Store from "../../../utils/store";
import store from "store2";

/*ESTO ASÍ VA HARDCODEADO, SON LOS TÍTULOS DE LAS COLUMNAS */
const ColumnsReportsByUser = (
  [
    { heading: 'ID reporte',       value: '_id' },
    { heading: 'ID Usuario',       value: 'idUser' },
    { heading: 'Email Usuario',    value: 'email' },
    { heading: 'Total de compras', value: 'totalSales' },
    { heading: 'Total',            value: 'totalPrice' },
    { heading: 'Fecha de creación',value: 'date' },
  ]
);

/*ESTOS DOS CONST SOLO SON EJEMPLO PARA CHECAR QUE SÍ
SE ESTÉ ACTUALIZANDO LA TABLA CON EL USE EFFECT */
const RowsReportsByUser = (
  [
    {
      id: 1,
      idUser: 1,
      email: 1,
      username: 1,
      totalPrice: 1
    },
    {
      id: 2,
      idUser: 2,
      email: 2,
      username: 2,
      totalPrice: 2
    }
  ]
);


function ReportByUser() {

  const [dataTable, setDataTable] = useState([]);
  let nav = useNavigate();
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth()+1;
  var day = d.getDate();
  var date = year + '-' + month + '-' + day;

  const role = store.get('ROLE');

  useEffect(() => {
    const store = new Store();
    if (!role.includes("admin")){
     nav("/")
    }
    store.GetReportGral((response) => {
      console.log(response.reportsUser);
      setDataTable(response.reportsUser);
      nav("/reportByUser");
    });
    setDataTable(RowsReportsByUser)
  }, []);

  return(
    <View banner= {''} header = {'Header'} theme={MainTheme} >
      <ReportByUserForm
        onCreateReport={(emailUser)=>{
//
          var pretotal = 0;
          const store = new Store();
          store.GetSalesByUser(emailUser, (response)=>{

            response.data.forEach(element => {
                pretotal+=element["price"];
            });

            store.PostReportByUser(response.data[0]["userid"], emailUser, response.data.length, pretotal, date, (response) => {
              setDataTable([response.data]);
              nav("/reportByUser");
            });
          });
        }}

        onSearchReport={(emailUser)=>{

            const store = new Store();
            store.GetReportByUser(emailUser, (response) => {
              console.log(response.data);
              setDataTable(response.data);
              nav("/reportByUser");
            });
          }}></ReportByUserForm>
      <Table data= {dataTable} column={ColumnsReportsByUser}></Table>
    </View>
  );
}

export default ReportByUser;

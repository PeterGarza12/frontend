import React, { useEffect, useState } from "react";
import { View } from "../../view/view";
import { MainTheme } from "../../../utils/colors";
import Table from "../../../components/PageComponentes/Table/table";
import ReportByUserForm from "../../../components/Forms/Reports/byUserForm";

/*ESTO ASÍ VA HARDCODEADO, SON LOS TÍTULOS DE LAS COLUMNAS */
const ColumnsReportsByUser = (
  [
    { heading: 'ID reporte',              value: 'id' },
    { heading: 'Email Usuario',           value: 'email' },
    { heading: 'Categoría más comprada',  value: 'mostSellProd' },
    { heading: 'Producto más comprado',   value: 'mostSellCat' },
    { heading: 'Total',                   value: 'totalPrice' },
  ]
);

/*ESTOS DOS CONST SOLO SON EJEMPLO PARA CHECAR QUE SÍ
SE ESTÉ ACTUALIZANDO LA TABLA CON EL USE EFFECT */
const RowsReportsByUser = (
  [
    {
      id: 1,
      email: 1,
      mostSellProd: 1,
      mostSellCat: 1,
      totalPrice: 1
    },
    {
      id: 2,
      email: 2,
      mostSellProd: 2,
      mostSellCat: 2,
      totalPrice: 2
    }
  ]
);

const RowsReportsByUser2 = (
  [
    {
      id: 3,
      email: 3,
      mostSellProd: 3,
      mostSellCat: 3,
      totalPrice: 3
    },
    {
      id: 4,
      email: 4,
      mostSellProd: 4,
      mostSellCat: 4,
      totalPrice: 4
    }
  ]
);

function ReportByUser() {

  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    //Aquí podríamos llenarlo en automático por primera vez con un get general
    //Try & Catch y ese pdo
    setDataTable(RowsReportsByUser)
  }, []);

  return(
    <View banner= {''} header = {'Header'} theme={MainTheme} >
      <ReportByUserForm
        onCreateReport={(emailUser)=>{
          setDataTable(RowsReportsByUser2);
              // const store = new Store();
              // store.PostReportByUser(emailUser, (response) => {
              //   setDataTable(response.data);
              //   nav("/");
              // });
            }}

        onSearchReport={(emailUser)=>{
        setDataTable(RowsReportsByUser2);
            // const store = new Store();
            // store.GetReportByUser(emailUser, (response) => {
            //   setDataTable(response.data);
            //   nav("/");
            // });
          }}></ReportByUserForm>
      <Table data= {dataTable} column={ColumnsReportsByUser}></Table>
    </View>
  );
}

export default ReportByUser;

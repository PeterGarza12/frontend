import React, { useEffect, useState } from "react";
import { View } from "../../view/view";
import { MainTheme } from "../../../utils/colors";
import Table from "../../../components/PageComponentes/Table/table";
import ReportByGeneral from "../../../components/Forms/Reports/byGeneral";

/*ESTO ASÍ VA HARDCODEADO, SON LOS TÍTULOS DE LAS COLUMNAS */
const ColumnsReportsGeneral = (
  [
    { heading: 'ID reporte',              value: 'id' },
    { heading: 'Producto más comprado',   value: 'mostSellProd' },
    { heading: 'Producto más comprado',   value: 'mostSellCat' },
    { heading: 'Total',                   value: 'totalPrice' },
  ]
);

/*ESTOS DOS CONST SOLO SON EJEMPLO PARA CHECAR QUE SÍ
SE ESTÉ ACTUALIZANDO LA TABLA CON EL USE EFFECT */
const RowsReportsGeneral = (
  [
    {
      id: 1,
      mostSellProd: 1,
      mostSellCat: 1,
      totalPrice: 1
    },
    {
      id: 2,
      mostSellProd: 2,
      mostSellCat: 2,
      totalPrice: 2
    }
  ]
);

function ReportGeneral() {

  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    //Try & Catch y ese pdo
    setDataTable(RowsReportsGeneral)
  }, []);

  //Según yo no se necesita hacer ninguna búsqueda en este reporte porque es general
  return(
    <View banner= {''} header = {'Header'} theme={MainTheme} >
      <ReportByGeneral
        onCreateReport={()=>{
          setDataTable(RowsReportsGeneral);
              // const store = new Store();
              // store.PostReportGeneral(, (response) => {
              //   setDataTable(response.data);
              //   nav("/");
              // });
            }}

        onSearchReport={()=>{
        setDataTable(RowsReportsGeneral);
            // const store = new Store();
            // store.GetReportGeneral(, (response) => {
            //   setDataTable(response.data);
            //   nav("/");
            // });
          }}></ReportByGeneral>
      <Table data= {dataTable} column={ColumnsReportsGeneral}></Table>
    </View>
  );
}

export default ReportGeneral;

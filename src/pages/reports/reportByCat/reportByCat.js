import React, { useEffect, useState } from "react";
import { View } from "../../view/view";
import { MainTheme } from "../../../utils/colors";
import Table from "../../../components/PageComponentes/Table/table";
import ReportByCategoryForm from "../../../components/Forms/Reports/byCatForm";

/*ESTO ASÍ VA HARDCODEADO, SON LOS TÍTULOS DE LAS COLUMNAS */
const ColumnsReportsByCat = (
  [
    { heading: 'ID reporte',              value: 'id' },
    { heading: 'Categoría',               value: 'idCategory' },
    { heading: 'Producto más comprado',   value: 'mostSellProd' },
    { heading: 'Total',                   value: 'totalPrice' },
  ]
);

/*ESTOS DOS CONST SOLO SON EJEMPLO PARA CHECAR QUE SÍ
SE ESTÉ ACTUALIZANDO LA TABLA CON EL USE EFFECT */
const RowsReportsByCategory = (
  [
    {
      id: 1,
      idCategory: 1,
      mostSellProd: 1,
      totalPrice: 1
    },
    {
      id: 2,
      idCategory: 2,
      mostSellProd: 2,
      totalPrice: 2
    }
  ]
);

const RowsReportsByCategory2 = (
  [
    {
      id: 3,
      idCategory: 3,
      mostSellProd: 3,
      totalPrice: 3
    },
    {
      id: 4,
      idCategory: 4,
      mostSellProd: 4,
      totalPrice: 4
    }
  ]
);

function ReportByCategory() {

  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    //Aquí podríamos llenarlo en automático por primera vez con un get general
    //Try & Catch y ese pdo
    setDataTable(RowsReportsByCategory)
  }, []);

  return(
    <View banner= {''} header = {'Header'} theme={MainTheme} >
      <ReportByCategoryForm
        onCreateReport={(idCategory)=>{
        setDataTable(RowsReportsByCategory2);
            // const store = new Store();
            // store.PostReportByCategory(idCategory, (response) => {
            //   setDataTable(response.data);
            //   nav("/");
            // });
          }}

      onSearchReport={(idCategory)=>{
        setDataTable(RowsReportsByCategory2);
            // const store = new Store();
            // store.GetReportByCategory(idCategory, (response) => {
            //   setDataTable(response.data);
            //   nav("/");
            // });
          }}></ReportByCategoryForm>
      <Table data= {dataTable} column={ColumnsReportsByCat}></Table>
    </View>
  );
}

export default ReportByCategory;

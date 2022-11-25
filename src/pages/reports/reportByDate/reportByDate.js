import React, { useEffect, useState } from "react";
import { View } from "../../view/view";
import { MainTheme } from "../../../utils/colors";
import Table from "../../../components/PageComponentes/Table/table";
import ReportByDateForm from "../../../components/Forms/Reports/byDateForm";

/*ESTO ASÍ VA HARDCODEADO, SON LOS TÍTULOS DE LAS COLUMNAS */
const ColumnsReportsByDate = (
  [
    { heading: 'ID reporte',              value: 'id' },
    { heading: 'Fecha inicial',           value: 'initDate' },
    { heading: 'Fecha final',             value: 'endDate' },
    { heading: 'Categoría más comprada',  value: 'mostSellProd' },
    { heading: 'Producto más comprado',   value: 'mostSellCat' },
    { heading: 'Categoría',               value: 'idCategory' },
    { heading: 'ID Usuario',              value: 'idUser' },
    { heading: 'Total',                   value: 'totalPrice' },
  ]
);

/*ESTOS DOS CONST SOLO SON EJEMPLO PARA CHECAR QUE SÍ
SE ESTÉ ACTUALIZANDO LA TABLA CON EL USE EFFECT */
const RowsReportsByDate = (
  [
    {
      id: 1,
      initDate: 1,
      endDate: 1,
      mostSellProd: 1,
      mostSellCat: 1,
      idCategory: 1,
      idUser: 1,
      totalPrice: 1
    },
    {
      id: 2,
      initDate: 2,
      endDate: 2,
      mostSellProd: 2,
      mostSellCat: 2,
      idCategory: 2,
      idUser: 2,
      totalPrice: 2
    },
    {
      id: 3,
      initDate: 3,
      endDate: 3,
      mostSellProd: 3,
      mostSellCat: 3,
      idCategory: 3,
      idUser: 3,
      totalPrice: 3
    },
    {
      id: 4,
      initDate: 4,
      endDate: 4,
      mostSellProd: 4,
      mostSellCat: 4,
      idCategory: 4,
      idUser: 4,
      totalPrice: 4
    }
  ]
);

const RowsReportsByDate2 = (
  [
    {
      id: 3,
      initDate: 3,
      endDate: 3,
      mostSellProd: 3,
      mostSellCat: 3,
      idCategory: 3,
      idUser: 3,
      totalPrice: 3
    },
    {
      id: 4,
      initDate: 4,
      endDate: 4,
      mostSellProd: 4,
      mostSellCat: 4,
      idCategory: 4,
      idUser: 4,
      totalPrice: 4
    }
  ]
);

function ReportByDate() {

  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    //Aquí podríamos llenarlo en automático por primera vez con un get general
    //Try & Catch y ese pdo
    setDataTable(RowsReportsByDate)
  }, []);

  return(
    <View banner= {''} header = {'Header'} theme={MainTheme} >
      <ReportByDateForm onSearchReport={(idUser)=>{
        setDataTable(RowsReportsByDate2);
            // const store = new Store();
            // store.GetReportByDate(idUser, (response) => {
            //   setDataTable(response.data);
            //   nav("/");
            // });
          }}></ReportByDateForm>
      <Table data= {dataTable} column={ColumnsReportsByDate}></Table>
    </View>
  );
}

export default ReportByDate;

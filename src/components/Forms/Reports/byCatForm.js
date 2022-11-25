import React from 'react';
import {
  LabelForm,
  BtnForm,
  Proof
} from '../styles';

// Formulario con componente de clase
class ReportByCatForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      idCategory: ''
    }
  }

  handleidCategoryChange = (e) => {
    const { value } = e.target
    this.setState({ idCategory: value })
  }

  render() {
    const { idCategory } = this.state

    const handleFormSubmit = (e) => {
      e.preventDefault();

        this.props.onSearchReport(this.state.idCategory);
    }

    return(
    <div className="ReportByCatForm col-10">
      <form onSubmit={handleFormSubmit}>
        <h1>Reporte por ID de la categoría</h1>

        <LabelForm>
          Buscar mediante el id/correo de la categoría
          <Proof type="text" className="col-12" placeholder="ID de la categoría" value={idCategory} onChange={this.handleidCategoryChange}/>
        </LabelForm>

        <BtnForm type="submit">
          Buscar
        </BtnForm>
      </form>
    </div>
    );
  }
}

export default ReportByCatForm;

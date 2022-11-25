import React from 'react';
import { StyledH1, StyledForm, StyledLabel, StyledInput, StyledButton } from './styles';

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

    const handleFormCreate = (e) => {
      e.preventDefault();
      this.props.onCreateReport(this.state.idCategory);
    }

    const handleFormSearch = (e) => {
      e.preventDefault();
      this.props.onSearchReport(this.state.idCategory);
    }

    return(
    <div className="ReportByCatForm col-10">
      <StyledH1>Reporte por categoría</StyledH1>
      <StyledForm>
        <StyledLabel>
          Buscar mediante el id de la categoría
          <StyledInput type="text" className="col-12" placeholder="ID de la categoría" value={idCategory} onChange={this.handleidCategoryChange}/>
        </StyledLabel>

        <StyledButton className='col-4'  onClick={handleFormCreate}>
          Crear
        </StyledButton>
        <StyledButton className='col-4' onClick={handleFormSearch}>
          Buscar
        </StyledButton>
      </StyledForm>
    </div>
    );
  }
}

export default ReportByCatForm;

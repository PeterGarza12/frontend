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

    const handleFormSubmit = (e) => {
      e.preventDefault();

        this.props.onSearchReport(this.state.idCategory);
    }

    return(
    <div className="ReportByCatForm col-10">
      <StyledH1>Reporte por ID de la categoría</StyledH1>
      <StyledForm onSubmit={handleFormSubmit}>


        <StyledLabel>
          Buscar mediante el id/correo de la categoría
          <StyledInput type="text" className="col-12" placeholder="ID de la categoría" value={idCategory} onChange={this.handleidCategoryChange}/>
        </StyledLabel>

        <StyledButton className='col-6' type="submit">
          Buscar
        </StyledButton>
      </StyledForm>
    </div>
    );
  }
}

export default ReportByCatForm;

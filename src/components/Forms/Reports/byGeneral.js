import React from 'react';
import { StyledH1, StyledForm, StyledLabel, StyledInput, StyledButton } from './styles';

// Formulario con componente de clase
class ReportByGeneral extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render() {
    const { emailUser } = this.state

    const handleFormCreate = (e) => {
      e.preventDefault();

        this.props.onCreateReport();
    }

    const handleFormSearch = (e) => {
      e.preventDefault();

        this.props.onSearchReport();
    }

    return(
    <div className="ReportByGeneral col-10">
      <StyledH1>Reporte general</StyledH1>
      <StyledForm>

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

export default ReportByGeneral;

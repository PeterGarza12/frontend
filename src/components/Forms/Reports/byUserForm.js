import React from 'react';
import { StyledH1, StyledForm, StyledLabel, StyledInput, StyledButton } from './styles';

// Formulario con componente de clase
class ReportByUserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emailUser: ''
    }
  }

  handleemailUserChange = (e) => {
    const { value } = e.target
    this.setState({ emailUser: value })
  }

  render() {
    const { emailUser } = this.state

    const handleFormCreate = (e) => {
      e.preventDefault();

        this.props.onCreateReport(this.state.emailUser);
    }

    const handleFormSearch = (e) => {
      e.preventDefault();

        this.props.onSearchReport(this.state.emailUser);
    }

    return(
    <div className="ReportByUserForm col-10">
      <StyledH1>Reporte por usuario</StyledH1>
      <StyledForm>
        <StyledLabel>
          Buscar mediante el correo del usuario
          <StyledInput type="text" className="col-12" placeholder="Correo del usuario" value={emailUser} onChange={this.handleemailUserChange}/>
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

export default ReportByUserForm;

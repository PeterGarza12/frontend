import React from 'react';
import { StyledH1, StyledForm, StyledLabel, StyledInput, StyledButton } from './styles';

// Formulario con componente de clase
class ReportByUserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      idUser: ''
    }
  }

  handleidUserChange = (e) => {
    const { value } = e.target
    this.setState({ idUser: value })
  }

  render() {
    const { idUser } = this.state

    const handleFormSubmit = (e) => {
      e.preventDefault();

        this.props.onSearchReport(this.state.idUser);
    }

    return(
    <div className="ReportByUserForm col-10">
      <StyledH1>Reporte por ID del usuario</StyledH1>
      <StyledForm onSubmit={handleFormSubmit}>


        <StyledLabel>
          Buscar mediante el id/correo del usuario
          <StyledInput type="text" className="col-12" placeholder="ID del usuario" value={idUser} onChange={this.handleidUserChange}/>
        </StyledLabel>

        <StyledButton type="submit">
          Buscar
        </StyledButton>
      </StyledForm>
    </div>
    );
  }
}

export default ReportByUserForm;

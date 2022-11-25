import React from 'react';
import {
  LabelForm,
  BtnForm,
  Proof
} from '../styles';

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
      <form onSubmit={handleFormSubmit}>
        <h1>Reporte por ID del usuario</h1>

        <LabelForm>
          Buscar mediante el id/correo del usuario
          <Proof type="text" className="col-12" placeholder="ID del usuario" value={idUser} onChange={this.handleidUserChange}/>
        </LabelForm>

        <BtnForm type="submit">
          Buscar
        </BtnForm>
      </form>
    </div>
    );
  }
}

export default ReportByUserForm;

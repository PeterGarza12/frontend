import React from 'react';
import { StyledH1, StyledForm, StyledLabel, StyledInput, StyledButton } from './styles';
// Formulario con componente de clase
class ReportByDateForm extends React.Component {
  constructor(props){
    super(props);

    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var day = d.getDate();
    console.log(day, month);
    var out = year + '-' + month + '-' + day;

    this.state = {
      maxDate: out,
      initDate: out
    }
  }

  handleinitDateChange = (e) => {
    const { value } = e.target
    this.setState({ initDate: value })
  }

  render() {
    const { initDate } = this.state
    const { maxDate } = this.state

    const handleFormSubmit = (e) => {
      e.preventDefault();

      console.log(initDate);
      this.props.onSearchReport(this.state.initDate);

    }

    return(
    <div className="ReportByDateForm col-10">
      <StyledH1>Reporte por fecha</StyledH1>
      <StyledForm onSubmit={handleFormSubmit}>


        <StyledLabel>
          Ingresar día de búsqueda
          <StyledInput type="date" className="col-12" max={maxDate} value={initDate} onChange={this.handleinitDateChange}/>
        </StyledLabel>

        <StyledButton className='col-6' type="submit">
          Buscar
        </StyledButton>
      </StyledForm>
    </div>
    );
  }
}

export default ReportByDateForm;

import React from 'react';
import {connect} from 'react-redux';

const FormAlert = ({isAlert, alertMessage}) =>
  <div className='form__alert' >
    {isAlert&&alertMessage}
  </div>;

const mapStateToProps = (state) =>({
  ...state.Form,
});

export default connect( mapStateToProps, null)(FormAlert);

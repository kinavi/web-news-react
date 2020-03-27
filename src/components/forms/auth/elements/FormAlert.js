import React from 'react';
import {connect} from 'react-redux';

const FormAlert = ({alertMessage}) =>
  <div className='form__alert' >
    {alertMessage}
  </div>;

const mapStateToProps = (state) =>({
  ...state.Form,
});

export default connect( mapStateToProps, null)(FormAlert);

import React from 'react';
import {connect} from 'react-redux';

import {doneLogin, donePassword, alertLogin, alertPassword, isAlert} from '../../../../store/Redusers/FormRedusers';

const FormInput = ({
  type,
  refInput,
  doneInput,
  alertInput,
  required=false,
})=>{
  const handlerChange = (e) =>{
    if (e.target.value==='') {
      return alertInput(type);
    }
    if (required) {
      return doneInput(type);
    }
  };
  return (
    <input
      ref={refInput}
      className={`form__input ${required&&'form__input_alert'}`}
      onChange={handlerChange} type={type}/>
  );
};
const mapDispatchToProps = (dispatch) =>({
  doneInput(type) {
    if (type==='text') {
      dispatch(doneLogin());
    } else {
      dispatch(donePassword());
    }
  },
  alertInput(type) {
    if (type==='text') {
      dispatch(alertLogin('Input login'));
    } else {
      dispatch(alertPassword('Input password'));
    }
  },
});

export default connect( null, mapDispatchToProps)(FormInput);

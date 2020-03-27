import React from 'react';
import {connect} from 'react-redux';

import {SET_DEFAULT_STATE} from '../../../store/Redusers/FormRedusers';

const FormInput = ({type, isAlert, refInput, onClickInput}) =>
  <input
    ref={refInput}
    className={`form__input ${isAlert&&'form__input_alert'}`}
    onChange={onClickInput} type={type}/>;

const mapStateToProps = (state) =>({
  ...state.Form,
});
const mapDispatchToProps = (dispatch) =>({
  onClickInput() {
    dispatch({
      type: SET_DEFAULT_STATE,
    });
  },

});

export default connect( mapStateToProps, mapDispatchToProps)(FormInput);

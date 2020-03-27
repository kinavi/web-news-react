import React from 'react';

export const FormCheckbox = ({refInput, text}) =>
  <div className='form__checkbox'>
    <label><input ref={refInput} type="checkbox"/> {text}</label>
  </div>;


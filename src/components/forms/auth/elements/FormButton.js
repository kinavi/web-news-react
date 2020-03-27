import React from 'react';

export const FormButton = ({text, className, onClick}) =>
  <button
    className='form__btn'
    onClick={onClick}>{text}</button>;

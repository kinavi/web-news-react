import React from 'react';

import './FormInput.css';

export const FormInput = ({value = '', setValue}) =>
  <div className="input__container-title">
    <div className="cms__title">Заголовок</div>
    <input
      className="input"
      onChange={(e)=>setValue(e.target.value)}
      value = {value}/>
  </div>;

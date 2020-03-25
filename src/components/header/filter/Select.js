import React, {useState} from 'react';

export const Select = ({title, values}) => {

  const [isVisible, setVisible] = useState(true);
  const [option, setOption] = useState('ALL');

  const handlerClick =(e)=>{
    setVisible(!isVisible);
    e.stopPropagation();
  };

  const Title = ({value}) =>{
    return (
      <div className='select__titel-group'>
        <div className='select_title'>{title}</div>
        <div className='select_value'>{value}</div>
      </div>
    );
  };

  const Options = ({options, setOption}) =>
    options.map((option, i)=>
      <div
        key={i}
        className='select__options'
        onClick={()=>setOption(option.text)}>
        {option.text}
      </div>);

  return (
    <div className='select__container' onClick={handlerClick}>
      {isVisible?
          <Title value={option}/>:
          <Options options={values} setOption={setOption}/>
      }
    </div>
  );
};

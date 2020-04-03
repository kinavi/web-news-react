import React, {useState} from 'react';


import './Select.css';

export const Select = ({title, values, option, setOption, onSelect}) => {
  const [isVisible, setVisible] = useState(true);
  // const [option, setOption] = useState('ALL');

  const handlerClick =(e)=>{
    //
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

  const Options = ({options, setOption}) => {
    const handlerSelect = (value) =>{
      onSelect(value);
      setOption(value);
    };
    return options.map((option, i)=>
      <div
        key={i}
        className='select__options'
        onClick={()=>handlerSelect(option)}>
        {option}
      </div>);
  };


  return (
    <div className='select__container' onClick={handlerClick}>
      {isVisible?
          <Title value={option}/>:
          <Options options={values} setOption={setOption} onSelect={onSelect}/>
      }
    </div>
  );
};
// const mapStateToProps = (state) =>({

//   // ...state.Form,
// });
// const mapDispatchToProps = (dispatch) =>({
//   // setRegister(login, password) {
//   //   dispatch(registerUser(login, password));
//   // },
//   // setDone() {
//   //   dispatch(allDone());
//   // },
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Select);

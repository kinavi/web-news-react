import React, {useContext} from 'react';
import {Login} from '../forms/Login';
import {ModalContext} from '../context';

export const Title = () =>{
  const {modalState} = useContext(ModalContext);
  // const [logForm, setLogForm] = useState(false);
  // const handlerClick = (e)=>{
  //   e.stopPropagation();

  // }
  return (
    <div className='header__title'>
      {modalState?<Login/>:
          <span className='text-center'>
            world web news
          </span>
      }

    </div>
  );
};

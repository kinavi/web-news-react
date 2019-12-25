import React,{ useState, useEffect, Component }  from "react";
import CmsPage from '../../Template/CmsPage'
import { connect } from 'react-redux'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
//import { LoadFile } from '../../test/loadFile'
import IMG from './IMG'
import { IoIosArrowDropleft } from "react-icons/io";

function AddNewLayerModal(props) {

    let titleInput
    let descriptionInput
    let fileInput
    const { onAdd, onHide } = props
    
    const [file, setFile] = useState();
    const [refFileInp, setRefFileInp] = useState();
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить новость
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label className="exampleInputPassword1">Заголовок</label>
                    <input className="form-control" ref={node=>titleInput=node}/>
                </div>
                <div className="form-group">
                    <label className="exampleInputPassword1">Описание</label>
                    <textarea ref={node=>descriptionInput=node} className="form-control" rows="10"></textarea>
                </div>
                <input ref={node=>setRefFileInp(node)} style={{display:"none"}} type="file" name="filedata" onChange={(event)=>setFile(event.target.files[0])}/>
                <div className="form-group">
                    <label className="exampleInputPassword1">Картинка</label>
                    <div className='d-flex flex-row '>
                        {!!file?<IMG file={file}/>:<div></div>}
                        <Button onClick={()=>refFileInp.click()}><IoIosArrowDropleft size="100" /></Button>
                    
                    </div>
                </div>
                
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={()=>{onAdd(titleInput.value, descriptionInput.value, file); onHide(); console.log(file)}}>Добавить</Button>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
      </Modal>
    );
}

// AddNewLayerModal.onChangeHandler = event => {
//     setFile(event.target.files[0]); console.log(event.target.files[0])
// }

export default AddNewLayerModal
import React,{ useState, Component }  from "react";
import CmsPage from '../../Template/CmsPage'
import { connect } from 'react-redux'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
//import { LoadFile } from '../../test/loadFile'

function AddNewLayerModal(props) {

    let titleInput
    let descriptionInput
    let fileInput
    const { onAdd, onHide } = props
    
    const [file, setFile] = useState('qwe');

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
                <input type="file" name="filedata" onChange={(event)=>setFile(event.target.files[0])}/>
                {/* {(fileShow)?
                    <input ref={node=>fileInput=node} type="file" name="filedata" onChange={()=>{setFile(fileInput.files);setFileShow(false)}}/>
                :
                    <div>
                        {console.dir(file.toString())}
                        {file.toString()}
                    </div>
                } */}
                
                {/* <form action="/upload" method="post" enctype="multipart/form-data">
                    <input type="file" name="filedata" />
                    <input ref={node=>fileInput=node} type="file" name="filedata" />
                    <input type="submit" value="Send"/>
                </form> */}
                
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
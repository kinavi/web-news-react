import React,{ useState, Component }  from "react";
import CmsPage from '../../Template/CmsPage'
import { connect } from 'react-redux'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import { EditNews } from '../../../redux/Actions/List/EditNews'



function EditNewsLayerModal(props) {
    const { onEdit, onHide,id,title,description } = props

    let titleInput
    let descriptionInput

    const [titleFeild, setTitleFeild] = useState(title);
    const [descriptionFeild, setDescriptionFeild] = useState(description);
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Редактировать новость
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label className="exampleInputPassword1">Заголовок</label>
                    <input onChange={()=>setTitleFeild(titleInput.value)} value={titleFeild} type="text" className="form-control" ref={node=>titleInput=node}/>
                </div>
                <div className="form-group">
                    <label className="exampleInputPassword1">Описание</label>
                    <textarea onChange={()=>setDescriptionFeild(descriptionInput.value)} value={descriptionFeild} ref={node=>descriptionInput=node} className="form-control" rows="10"></textarea>
                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={()=>{onEdit(id, titleInput.value, descriptionInput.value); onHide()}}>Сохранить</Button>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
      </Modal>
      
    );
    
}

function clearObj(source, target){

}

const mapDispatchToProps = dispatch =>({
    onEdit(id, title, description){
        dispatch(EditNews(id, title, description))
    }
})

export default connect(
    null,
    mapDispatchToProps
)(EditNewsLayerModal)
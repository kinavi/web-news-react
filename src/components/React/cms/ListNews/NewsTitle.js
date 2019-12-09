import React from "react";
import { connect } from 'react-redux'
import { Button } from "react-bootstrap";
import { RemoveNews } from '../../../Redux/Actions/List/RemoveNews'
import EditNewsLayerModal from '../AddNewPage/EditNewsLayerModal'

const ListNewsTitle = ({id, title, description, onRemove}) =>{

    const [modalShow, setModalShow] = React.useState(false);
    
    return(
        <div className="bg-info d-flex rounded mb-2" >
            <div className="align-self-center ml-2 rounded text-white flex-fill">{title}</div>
            <Button onClick={() => setModalShow(true)} variant="warning" size="sm" className="m-2">Изменить</Button>
            <Button onClick={() => onRemove(id)} variant="danger" size="sm" className="m-2">Удалить</Button>
            <EditNewsLayerModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={id}
                title={title}
                description={description}
            />
        </div>
    )
}

export default ListNewsTitle

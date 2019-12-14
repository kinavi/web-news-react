import React from "react"
import CmsPage from '../../Template/CmsPage'
import { connect } from 'react-redux'
import { AddNew } from '../../../redux/Actions/List/AddNew'
import ListNews from '../ListNews/ListNewsPage'
import { withRouter } from 'react-router'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'
import AddNewsLayerModal from './AddNewsLayerModal'


const AddNewLayer = ({onAdd})=>{
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div className="mb-4">
            <ButtonToolbar>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                   Добавить новость
                </Button>

                <AddNewsLayerModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    onAdd={onAdd}
                />
            </ButtonToolbar>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    onAdd(id, title, description){
        dispatch(AddNew(id, title, description))
        //history.push(`/list`)
    }
})

export default connect(
    null,
    mapDispatchToProps
)(AddNewLayer)



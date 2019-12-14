import React from "react"
import CmsPage from '../../Template/CmsPage'
import { connect } from 'react-redux'
import { AddNew } from '../../../redux/Actions/List/AddNew'
import ListNews from '../ListNews/ListNewsPage'
import { withRouter } from 'react-router'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'
import AddNewsLayerModal from './AddNewsLayerModal'
import {addNews} from '../../../actions'

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
    onAdd(title, description){
        console.log(`title - ${title}, description - ${description}`)
        dispatch(addNews(title, description))
    }
})

export default connect(
    null,
    mapDispatchToProps
)(AddNewLayer)



import React from "react";
import CmsPage from '../../Template/CmsPage'
import { connect } from 'react-redux'
import { AddNew } from '../../../Redux/Actions/List/AddNew'
import ListNews from '../ListNews/ListNews'

const AddNewLayer = ({onAdd}) =>{
    let titleInput
    let descriptionInput

    return(
        <CmsPage>
            <h2 className="h2">
                Добавить новость
            </h2>
            <form>
                <div className="form-group">
                    <label className="exampleInputPassword1">Заголовок</label>
                    <input className="form-control" ref={node=>titleInput=node}/>
                </div>
                <div className="form-group">
                    <label className="exampleInputPassword1">Описание</label>
                    <input className="form-control" ref={node=>descriptionInput=node}/>
                </div>
                <button className="btn btn-outline-success" onClick={()=>onAdd(10, titleInput.value, descriptionInput.value)}>Добавить</button>
               
                
            </form>
            {/* <ListNews/> */}
        </CmsPage>
    )
}    

//export default AddNewLayer

// const mapStateToProps = state =>({
//     News: state.News
// })

const mapDispatchToProps = dispatch =>({
    onAdd(id, title, description){
        dispatch(AddNew(id, title, description))
    }
})

export default connect(
    null,
    mapDispatchToProps
)(AddNewLayer)
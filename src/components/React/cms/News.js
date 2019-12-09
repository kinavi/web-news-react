import React from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { RemoveNews } from '../../Redux/Actions/List/RemoveNews'
import test from '../../Media/test.jpg'

const News = ({ id, title, description, onRemove}) =>//list-list-group-item d-flex
    <div className="card rounded mb-5">
        <img src={test} className=" card-img-top" />
        <div className="card-body">
            <div className="card-title h3">{title}</div>
            <div className="card-text text-muted">{description}</div>
            {/* <button onClick={()=>onRemove(id)} className='btn btn-warning'>
                Изменить
            </button>
            <button onClick={()=>onRemove(id)} className='btn btn-danger m-3'>
                Удалить
            </button> */}
        </div>
        
        
    </div>

const mapDispatchToProps = dispatch =>({
    onRemove(id){
        dispatch(RemoveNews(id))
    }
})


//let WithUrlData = withRouter()

export default connect(
    null,
    mapDispatchToProps
)(News)
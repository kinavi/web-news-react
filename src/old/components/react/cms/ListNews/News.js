import React from "react";
import { connect } from 'react-redux'
//import { withRouter } from 'react-router'
import { RemoveNews } from '../../../redux/Actions/List/RemoveNews'
//import test from '../../../media/test.jpg'
import { convertToHTML, convertFromHTML } from 'draft-convert'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const News = ({ id, title, description, fileName ,onRemove}) =>//list-list-group-item d-flex
    <div className="shadow card rounded mb-5">
        <img src={fileName} className=" card-img-top" />
        <div className="card-body">
            <div className="card-title h3">{title}</div>
            <div className="card-text text-muted">{ ReactHtmlParser(description) }</div>
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

export default connect(
    null,
    mapDispatchToProps
)(News)
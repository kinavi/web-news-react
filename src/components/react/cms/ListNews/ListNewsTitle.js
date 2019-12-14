import React from "react";
import { connect } from 'react-redux'
import { Button } from "react-bootstrap";
import { RemoveNews } from '../../../redux/Actions/List/RemoveNews'
import EditNewsLayerModal from '../AddNewPage/EditNewsLayerModal'
import NewsTitle from './NewsTitle'
import {removeNews} from '../../../actions'

const ListNewsTitle = ({ ListNews, onRemove, onEdit}) =>{
    
    return(
        <div className="">
            {ListNews.map((n,i)=>
                <NewsTitle key={i} {...n} onRemove={onRemove}/>
                )}
        </div>
    )
}

const mapStateToProps = state =>({
    ListNews:state.ListNews
})

const mapDispatchToProps = dispatch =>({
    onRemove(id){
        dispatch(removeNews(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListNewsTitle)

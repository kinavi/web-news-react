import React from "react";
import { connect } from 'react-redux'
//import NewsTitle from './NewsTitle'
//import EditNews from './EditNews'
import { Button } from "react-bootstrap";
import { removeNews } from '../store/Actions'
import { Link } from 'react-router-dom'

const ListNewsCms = ({ ListNews, onRemove}) =>
        <div className="">
            {(!!ListNews)?
                ListNews.map((n,i)=>
                    <div key={i}>
                        <div style={{background:"#af9b79"}} className="d-flex rounded">
                            <div className="align-self-center ml-2 rounded text-white flex-fill">{n.title}</div>
                            <Link className="nav-link " to="cms/add">Изменить</Link>
                            <Button onClick={() => onRemove(n.id)} variant="danger" size="sm" className="m-2">Удалить</Button>
                        </div>
                    </div>
                    // <EditNews key={i} {...n} />
                    )
                :
                <div>Новостей нет</div>
            }
        </div>

const mapStateToProps = state =>({
    ListNews:state.ListNews
})

const mapDispatchToProps = dispatch =>({
    // onEdit(id, title, description){
    //     dispatch(editNews(id, title, description))
    // },
    onRemove(id){
        dispatch(removeNews(id))
    }

})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListNewsCms)

import React from "react";
import { connect } from 'react-redux'
//import NewsTitle from './NewsTitle'
//import EditNews from './EditNews'
import { Button } from "react-bootstrap";
import { removeNews } from '../store/Actions'
import { Link, useHistory,useParams, useLocation } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';

const ListNewsCms = ({ ListNews, onRemove}) =>{

    let history = useHistory();

    function handleClickChangeBtn(id){
        history.push(`/edit/${id}`);
    }

    return(
        <div className="">
            {(!!ListNews)?
                ListNews.map((n,i)=>
                    <div key={i} className="shadow mb-2">
                        <div style={{background:"#af9b79"}} className="d-flex rounded">
                            <div className="align-self-center ml-2 rounded text-white flex-fill">{n.title}</div>
                            <Button onClick={()=>handleClickChangeBtn(n.id)} size="sm" className="m-2">Изменить</Button> 
                            <Button onClick={() => onRemove(n.id)} variant="danger" size="sm" className="m-2">Удалить</Button>
                        </div>
                    </div>
                    
                    )
                :
                <div>Новостей нет</div>
            }
            
        </div>
    )
}
        

const mapStateToProps = state =>({
    ListNews:state.ListNews
})

const mapDispatchToProps = dispatch =>({
    // onEdit(id, title, description){
    //     dispatch(editNews(id, title, description)) {pathname:"/cms/edit", search:`?id=${n.id}`}
    // },
    onRemove(id){
        dispatch(removeNews(id))
    }

})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListNewsCms)

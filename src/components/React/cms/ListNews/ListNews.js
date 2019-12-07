import React from "react";
import { connect } from 'react-redux'
import  CmsPage  from '../../Template/CmsPage'

const ListNews = ({ News }) =>
    <CmsPage className='nav'>
        <ul className="list-group">
            {(News.length)?
                News.map((_new, i)=>
                <li key={i} className="list-list-group-item" >
                    <div>Заголовок</div>
                    <div>{_new.title}</div>
                    <div>Описание</div>
                    <div>{_new.description}</div>
                </li>
                )
                :
                <div>Новостей нет!</div>
            }
        </ul>
    </CmsPage>
    

const mapStateToProps = state =>({
    News: state.News
})

const mapDispatchToProps = dispatch =>({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListNews)